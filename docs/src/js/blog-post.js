// ============================================
// BLOG POST PAGE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Get slug from URL path: /blog/some-slug -> some-slug
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const slug = pathParts[pathParts.length - 1];

    const post = getNewsBySlug(slug);

    if (!post) {
        renderNotFound();
        return;
    }

    // Update page title and meta
    document.getElementById('pageTitle').textContent = `${post.title} - Sid Lancaster`;
    const metaDesc = document.getElementById('pageDescription');
    if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

    renderPost(post);
    renderRelatedPosts(post);
});

function renderPost(post) {
    const container = document.getElementById('blogPostContent');
    if (!container) return;

    const hasContent = post.content && post.content.trim() && post.content !== 'Full article content would go here...';

    container.innerHTML = `
        <!-- BREADCRUMB -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/blog">Blog</a></li>
                <li class="breadcrumb-item active" aria-current="page">${post.title}</li>
            </ol>
        </nav>

        <!-- POST HERO -->
        <section class="blog-post-hero">
            <div class="blog-post-hero-content">
                <span class="post-category ${post.category}">${getCategoryLabel(post.category)}</span>
                <h1 class="blog-post-title">${post.title}</h1>
                <div class="blog-post-meta">
                    <span class="post-date">${post.dateFormatted}</span>
                    <span class="reading-time-dot">·</span>
                    <span class="reading-time">${post.readingTime} min read</span>
                </div>
            </div>
        </section>

        <!-- POST BODY -->
        <section class="blog-post-body-section">
            <div class="blog-post-body">
                ${hasContent
                    ? `<div class="blog-post-content">${post.content}</div>`
                    : `<div class="blog-post-placeholder">
                        <div class="placeholder-icon">✍️</div>
                        <h3>Coming Soon</h3>
                        <p>This post is still being written. Subscribe to the newsletter to be notified when it's published.</p>
                        <a href="/#newsletter" class="btn-primary">Get Notified</a>
                       </div>`
                }

                ${post.tags && post.tags.length > 0 ? `
                <div class="blog-post-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag.replace(/-/g, ' ')}</span>`).join('')}
                </div>` : ''}

                <div class="blog-post-back">
                    <a href="/blog" class="post-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Back to Blog
                    </a>
                </div>
            </div>
        </section>

        <!-- RELATED POSTS -->
        <section class="blog-related-section">
            <div class="blog-related-container">
                <h2 class="blog-related-heading">More Posts</h2>
                <div class="blog-related-grid" id="relatedPosts"></div>
            </div>
        </section>
    `;
}

function renderRelatedPosts(currentPost) {
    const container = document.getElementById('relatedPosts');
    if (!container) return;

    const related = newsData
        .filter(p => p.slug !== currentPost.slug)
        .slice(0, 3);

    container.innerHTML = related.map(post => `
        <article class="blog-card">
            <div class="blog-card-body">
                <span class="post-category ${post.category}">${getCategoryLabel(post.category)}</span>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
            </div>
            <div class="blog-card-footer">
                <div class="blog-card-meta">
                    <span class="post-date">${post.dateFormatted}</span>
                    <span class="reading-time">${post.readingTime} min read</span>
                </div>
                <a href="/blog/${post.slug}" class="post-link">
                    Read Post
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </article>
    `).join('');
}

function renderNotFound() {
    const container = document.getElementById('blogPostContent');
    if (!container) return;
    container.innerHTML = `
        <section class="blog-post-hero">
            <div class="blog-post-hero-content">
                <h1 class="blog-post-title">Post Not Found</h1>
                <p>This post doesn't exist or may have been moved.</p>
                <a href="/blog" class="btn-primary">Back to Blog</a>
            </div>
        </section>
    `;
}

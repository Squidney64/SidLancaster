// ============================================
// BLOG PAGE JAVASCRIPT
// ============================================

const POSTS_PER_PAGE = 6;
let blogCurrentFilter = 'all';
let blogCurrentPage   = 1;
let blogSearchQuery   = '';
let currentPostSlug   = null; // null = listing view

// Reading progress scroll listener (stored so we can remove it)
let _progressScrollHandler = null;

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    renderSidebar();
    setupSearch();

    // Hash routing: open post directly if URL contains a slug
    const hashSlug = window.location.hash.replace('#', '').trim();
    if (hashSlug && getNewsBySlug(hashSlug)) {
        currentPostSlug = hashSlug;
        renderPostView(hashSlug);
    } else {
        renderBlogPage();
    }

    // Browser back / forward
    window.addEventListener('popstate', () => {
        const slug = window.location.hash.replace('#', '').trim();
        if (slug && getNewsBySlug(slug)) {
            currentPostSlug = slug;
            renderPostView(slug);
        } else {
            currentPostSlug = null;
            const grid = document.getElementById('blogGrid');
            if (grid && grid.className !== 'blog-grid') grid.className = 'blog-grid';
            renderBlogPage();
        }
        renderSidebarSeries(); // update active state
    });
});

// ============================================
// READING TIME HELPER
// ============================================

function getReadingTime(post) {
    const calculated = calcReadingTime(post.content);
    return calculated !== null ? calculated : (post.readingTime || 1);
}

function readingTimeLabel(post) {
    return `${getReadingTime(post)} min read`;
}

// ============================================
// VIEW SWITCHING
// ============================================

function showListing() {
    currentPostSlug = null;
    history.pushState(null, '', window.location.pathname); // clear hash cleanly
    stopProgressBar();
    const grid = document.getElementById('blogGrid');
    if (grid && grid.className !== 'blog-grid') grid.className = 'blog-grid';
    renderBlogPage();
    renderSidebarCategories();
    renderSidebarSeries();
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

function showPost(slug) {
    currentPostSlug = slug;
    history.pushState(null, '', `#${slug}`);
    renderPostView(slug);
    renderSidebarSeries(); // auto-expand relevant series
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// READING PROGRESS BAR
// ============================================

function startProgressBar() {
    const bar = document.getElementById('readingProgress');
    if (!bar) return;
    stopProgressBar(); // remove any existing listener first

    _progressScrollHandler = () => {
        const scrollTop  = window.scrollY || document.documentElement.scrollTop;
        const docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const pct        = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
        bar.style.width  = pct + '%';
    };
    window.addEventListener('scroll', _progressScrollHandler, { passive: true });
    bar.style.width = '0%';
}

function stopProgressBar() {
    if (_progressScrollHandler) {
        window.removeEventListener('scroll', _progressScrollHandler);
        _progressScrollHandler = null;
    }
    const bar = document.getElementById('readingProgress');
    if (bar) bar.style.width = '0%';
}

// ============================================
// SHARE BUTTON
// ============================================

function setupShareButton(slug) {
    const btn = document.getElementById('shareBtn');
    if (!btn) return;
    btn.addEventListener('click', async () => {
        const url = `${window.location.origin}${window.location.pathname}#${slug}`;
        try {
            await navigator.clipboard.writeText(url);
        } catch (_) {
            // Fallback for file:// or clipboard API unavailable
            const ta = document.createElement('textarea');
            ta.value = url;
            ta.style.position = 'fixed';
            ta.style.opacity  = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        btn.classList.add('copied');
        btn.title = 'Copied!';
        const icon  = btn.querySelector('.share-icon');
        const check = btn.querySelector('.share-check');
        if (icon)  icon.style.display  = 'none';
        if (check) check.style.display = 'inline';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.title = 'Copy link';
            if (icon)  icon.style.display  = 'inline';
            if (check) check.style.display = 'none';
        }, 2000);
    });
}

// ============================================
// LISTING VIEW
// ============================================

function renderBlogPage() {
    const posts = getFilteredPosts();
    renderFeatured(posts);
    renderGrid(posts);
    renderPagination(posts);
}

// ── Fuzzy search ────────────────────────────────────────────────────────
// Returns a score ≥ 0 for how well `query` matches `text`.
// 0 means no match. Higher = better.
// Strategy: look for all query chars as a subsequence; award bonus points
// for consecutive runs (the chars appear adjacent in text) and for a
// prefix match at the very start of a word boundary.
function fuzzyScore(query, text) {
    if (!query || !text) return 0;
    const q = query.toLowerCase();
    const t = text.toLowerCase();

    // Fast exact-substring: give it a high base score
    if (t.includes(q)) {
        // Extra bonus if it's a word-boundary prefix match
        const idx = t.indexOf(q);
        const atBoundary = idx === 0 || /[\s\-_]/.test(t[idx - 1]);
        return 100 + (atBoundary ? 50 : 0) + (idx === 0 ? 25 : 0);
    }

    // Subsequence match: every char in q must appear in t in order
    let qi = 0;          // position in query
    let score = 0;
    let consecutive = 0; // how many chars matched back-to-back
    let lastTi = -1;

    for (let ti = 0; ti < t.length && qi < q.length; ti++) {
        if (t[ti] === q[qi]) {
            consecutive = (ti === lastTi + 1) ? consecutive + 1 : 1;
            score += 1 + consecutive; // consecutive run bonus
            // Word-boundary bonus: match starts a new word
            if (ti === 0 || /[\s\-_]/.test(t[ti - 1])) score += 3;
            lastTi = ti;
            qi++;
        }
    }

    // All query chars must be present as a subsequence, else no match
    return qi === q.length ? score : 0;
}

// Score a post against the query across all fields, weighted by field importance.
function scorePost(post, query) {
    if (!query) return 1; // no query = everything passes with equal weight

    let best = 0;

    const check = (text, weight) => {
        const s = fuzzyScore(query, text);
        if (s > 0) best = Math.max(best, s * weight);
    };

    check(post.title,    3.0);  // title is most important
    check(post.excerpt,  1.0);
    check(getCategoryLabel(post.category), 1.5);

    // Tags: check both slug form and display form
    (post.tags || []).forEach(tag => {
        check(tag,                    1.8);
        check(tag.replace(/-/g, ' '), 1.8);
    });

    // Series title if post belongs to one
    if (post.series) {
        const s = getPostSeriesById(post.series);
        if (s) check(s.title, 1.5);
    }

    return best;
}

function getFilteredPosts() {
    let posts = newsData;

    // Category filter first (hard filter, not fuzzy)
    if (blogCurrentFilter !== 'all') {
        posts = posts.filter(p => p.category === blogCurrentFilter);
    }

    // Fuzzy search: score every post, keep those with score > 0, sort by score
    if (blogSearchQuery) {
        const scored = posts
            .map(p => ({ post: p, score: scorePost(p, blogSearchQuery) }))
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score);
        posts = scored.map(({ post }) => post);
    }

    return posts;
}

function renderFeatured(posts) {
    const container = document.getElementById('blogFeatured');
    if (!container) return;

    const featured = blogCurrentFilter === 'all' && blogCurrentPage === 1 && !blogSearchQuery
        ? posts.find(p => p.featured)
        : null;

    if (!featured) { container.innerHTML = ''; return; }

    container.innerHTML = `
        <article class="blog-featured-post" data-slug="${featured.slug}" role="button" tabindex="0" aria-label="Read ${featured.title}">
            <div class="blog-featured-body">
                ${featured.series ? `<span class="featured-series-badge">${getPostSeriesById(featured.series).title} · Part ${featured.seriesOrder}</span>` : ''}
                <span class="post-category ${featured.category}">${getCategoryLabel(featured.category)}</span>
                <h2 class="blog-featured-title">${featured.title}</h2>
                <p class="blog-featured-excerpt">${featured.excerpt}</p>
                <div class="blog-featured-meta">
                    <span class="post-date">${featured.dateFormatted}</span>
                    <span class="separator">·</span>
                    <span class="reading-time">${readingTimeLabel(featured)}</span>
                </div>
                <span class="btn btn-secondary">Read Post →</span>
            </div>
        </article>
    `;

    const el = container.querySelector('.blog-featured-post');
    el.addEventListener('click', () => showPost(featured.slug));
    el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showPost(featured.slug); }
    });
}

function renderGrid(posts) {
    const container = document.getElementById('blogGrid');
    if (!container) return;

    const featuredSlug = blogCurrentFilter === 'all' && blogCurrentPage === 1 && !blogSearchQuery
        ? (posts.find(p => p.featured) || {}).slug
        : null;

    const gridPosts = posts.filter(p => p.slug !== featuredSlug);
    const start     = (blogCurrentPage - 1) * POSTS_PER_PAGE;
    const pagePosts = gridPosts.slice(start, start + POSTS_PER_PAGE);

    if (pagePosts.length === 0) {
        container.innerHTML = `<p class="blog-empty">No posts found. Try a different search or category.</p>`;
        return;
    }

    container.innerHTML = pagePosts.map(post => `
        <article class="blog-card" data-slug="${post.slug}" role="button" tabindex="0" aria-label="Read ${post.title}">
            <div class="blog-card-body">
                ${post.series ? `<span class="card-series-label">${getPostSeriesById(post.series).title} · Part ${post.seriesOrder}</span>` : ''}
                <span class="post-category ${post.category}">${getCategoryLabel(post.category)}</span>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
            </div>
            <div class="blog-card-footer">
                <div class="blog-card-meta">
                    <span class="post-date">${post.dateFormatted}</span>
                    <span class="separator">·</span>
                    <span class="reading-time">${readingTimeLabel(post)}</span>
                </div>
                <span class="post-link">
                    Read Post
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </article>
    `).join('');

    container.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', () => showPost(card.dataset.slug));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showPost(card.dataset.slug); }
        });
    });
}

function renderPagination(posts) {
    const container = document.getElementById('blogPagination');
    if (!container) return;

    const featuredSlug = blogCurrentFilter === 'all' && blogCurrentPage === 1 && !blogSearchQuery
        ? (posts.find(p => p.featured) || {}).slug
        : null;
    const gridPosts  = posts.filter(p => p.slug !== featuredSlug);
    const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);

    if (totalPages <= 1) { container.innerHTML = ''; return; }

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(`<button class="blog-page-btn ${i === blogCurrentPage ? 'active' : ''}" data-page="${i}">${i}</button>`);
    }

    container.innerHTML = `
        <button class="blog-page-btn blog-prev" ${blogCurrentPage === 1 ? 'disabled' : ''} data-page="${blogCurrentPage - 1}">← Prev</button>
        ${pages.join('')}
        <button class="blog-page-btn blog-next" ${blogCurrentPage === totalPages ? 'disabled' : ''} data-page="${blogCurrentPage + 1}">Next →</button>
    `;

    container.querySelectorAll('.blog-page-btn[data-page]').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
                blogCurrentPage = page;
                renderBlogPage();
                document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// POST VIEW (replaces grid in-place)
// ============================================

function renderPostView(slug) {
    const post = getNewsBySlug(slug);
    if (!post) return;

    const featured   = document.getElementById('blogFeatured');
    const grid       = document.getElementById('blogGrid');
    const pagination = document.getElementById('blogPagination');
    if (!grid) return;

    if (featured)   featured.innerHTML   = '';
    if (pagination) pagination.innerHTML = '';

    const hasContent = post.content && post.content.trim() && post.content !== 'Full article content would go here...';

    // Prev / Next — prefer series order; fall back to newsData order
    let prevPost = null;
    let nextPost = null;

    if (post.series) {
        const seriesPosts = getSeriesPosts(post.series);
        const idx = seriesPosts.findIndex(p => p.slug === slug);
        prevPost  = idx > 0 ? seriesPosts[idx - 1] : null;
        nextPost  = idx < seriesPosts.length - 1 ? seriesPosts[idx + 1] : null;
    } else {
        const allPosts = newsData;
        const idx = allPosts.findIndex(p => p.slug === slug);
        prevPost  = idx > 0 ? allPosts[idx - 1] : null;
        nextPost  = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
    }

    // "More posts" — 3 posts from same category, excluding current and series siblings
    const related = newsData
        .filter(p => p.slug !== slug && p.category === post.category)
        .slice(0, 3);

    grid.className = 'blog-post-view';
    grid.innerHTML = `
        <!-- BREADCRUMB -->
        <nav class="inline-breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li class="breadcrumb-item">
                    <button class="breadcrumb-back-btn" id="backToListing">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Blog
                    </button>
                </li>
                ${post.series ? `
                <li class="breadcrumb-sep" aria-hidden="true">/</li>
                <li class="breadcrumb-item">
                    <button class="breadcrumb-back-btn breadcrumb-series-btn" data-series="${post.series}">
                        ${getPostSeriesById(post.series).title}
                    </button>
                </li>` : ''}
                <li class="breadcrumb-sep" aria-hidden="true">/</li>
                <li class="breadcrumb-item breadcrumb-current" aria-current="page">${post.title}</li>
            </ol>
        </nav>

        <!-- POST HERO -->
        <div class="inline-post-hero">
            <span class="post-category ${post.category}">${getCategoryLabel(post.category)}</span>
            <h1 class="inline-post-title">${post.title}</h1>
            <div class="inline-post-meta">
                <span class="post-date">${post.dateFormatted}</span>
                <span class="separator">·</span>
                <span class="reading-time">${readingTimeLabel(post)}</span>
                <span class="separator">·</span>
                <button class="share-btn" id="shareBtn" title="Copy link" aria-label="Copy link to this post">
                    <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="18" cy="5" r="3" stroke-width="2"/>
                        <circle cx="6" cy="12" r="3" stroke-width="2"/>
                        <circle cx="18" cy="19" r="3" stroke-width="2"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke-width="2"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke-width="2"/>
                    </svg>
                    <svg class="share-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="display:none">
                        <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="share-label">Share</span>
                </button>
            </div>
        </div>

        ${post.series ? renderSeriesStrip(post) : ''}

        <!-- POST BODY -->
        <div class="inline-post-body">
            ${hasContent
                ? `<div class="blog-post-content">${post.content}</div>`
                : `<div class="blog-post-placeholder">
                    <div class="placeholder-icon">✍️</div>
                    <h3>Coming Soon</h3>
                    <p>This post is still being written. Subscribe to the newsletter to be notified when it's published.</p>
                    <a href="/#newsletter" class="btn btn-primary">Get Notified</a>
                   </div>`
            }

            ${post.tags && post.tags.length > 0 ? `
            <div class="blog-post-tags">
                ${post.tags.map(tag => `<span class="blog-tag">${tag.replace(/-/g, ' ')}</span>`).join('')}
            </div>` : ''}
        </div>

        <!-- PREV / NEXT NAVIGATION -->
        ${(prevPost || nextPost) ? `
        <div class="post-nav">
            <div class="post-nav-slot">
                ${prevPost ? `
                <button class="post-nav-btn post-nav-prev" data-slug="${prevPost.slug}">
                    <span class="post-nav-direction">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Previous
                    </span>
                    <span class="post-nav-title">${prevPost.title}</span>
                </button>` : ''}
            </div>
            <div class="post-nav-slot post-nav-slot-next">
                ${nextPost ? `
                <button class="post-nav-btn post-nav-next" data-slug="${nextPost.slug}">
                    <span class="post-nav-direction">
                        Next
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="post-nav-title">${nextPost.title}</span>
                </button>` : ''}
            </div>
        </div>` : ''}

        <!-- MORE POSTS -->
        ${related.length > 0 ? `
        <div class="inline-related">
            <h2 class="inline-related-heading">More in ${getCategoryLabel(post.category)}</h2>
            <div class="blog-grid">
                ${related.map(p => `
                    <article class="blog-card" data-slug="${p.slug}" role="button" tabindex="0" aria-label="Read ${p.title}">
                        <div class="blog-card-body">
                            <span class="post-category ${p.category}">${getCategoryLabel(p.category)}</span>
                            <h3 class="blog-card-title">${p.title}</h3>
                            <p class="blog-card-excerpt">${p.excerpt}</p>
                        </div>
                        <div class="blog-card-footer">
                            <div class="blog-card-meta">
                                <span class="post-date">${p.dateFormatted}</span>
                                <span class="separator">·</span>
                                <span class="reading-time">${readingTimeLabel(p)}</span>
                            </div>
                            <span class="post-link">Read Post
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>` : ''}
    `;

    // Wire events
    document.getElementById('backToListing').addEventListener('click', () => {
        grid.className = 'blog-grid';
        showListing();
    });

    const seriesBtn = grid.querySelector('.breadcrumb-series-btn');
    if (seriesBtn) {
        seriesBtn.addEventListener('click', () => {
            blogCurrentFilter = 'all';
            blogSearchQuery   = post.series; // filter by series id as tag search
            blogCurrentPage   = 1;
            const searchInput = document.getElementById('blogSearch');
            if (searchInput) searchInput.value = '';
            grid.className = 'blog-grid';
            currentPostSlug = null;
            renderBlogPage();
            renderSidebarCategories();
            document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
        });
    }

    grid.querySelectorAll('.post-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => showPost(btn.dataset.slug));
    });

    grid.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', () => showPost(card.dataset.slug));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showPost(card.dataset.slug); }
        });
    });

    grid.querySelectorAll('.series-pill[data-slug]').forEach(pill => {
        pill.addEventListener('click', () => showPost(pill.dataset.slug));
    });

    setupShareButton(slug);
    startProgressBar();
}

// ============================================
// SERIES STRIP (inside post view)
// ============================================

function renderSeriesStrip(post) {
    const series      = getPostSeriesById(post.series);
    const seriesPosts = getSeriesPosts(post.series);
    if (!series || seriesPosts.length === 0) return '';

    const pills = seriesPosts.map((p, i) => {
        const isCurrent = p.slug === post.slug;
        return `
            <button class="series-pill ${isCurrent ? 'series-pill-active' : ''}"
                    ${isCurrent ? 'aria-current="true"' : `data-slug="${p.slug}"`}
                    ${isCurrent ? 'disabled' : ''}
                    title="${p.title}">
                <span class="series-pill-num">${i + 1}</span>
                <span class="series-pill-label">${isCurrent ? p.title : `Part ${i + 1}`}</span>
            </button>
        `;
    }).join('');

    return `
        <div class="series-strip">
            <div class="series-strip-header">
                <span class="series-strip-icon">📚</span>
                <span class="series-strip-title">${series.title}</span>
                <span class="series-strip-count">Part ${post.seriesOrder} of ${seriesPosts.length}</span>
            </div>
            <div class="series-strip-pills">${pills}</div>
        </div>
    `;
}

// ============================================
// SIDEBAR
// ============================================

function renderSidebar() {
    renderSidebarFeatured();
    renderSidebarSeries();
    renderSidebarCategories();
    renderSidebarRecent();
    renderSidebarTags();
}

// Featured posts widget
function renderSidebarFeatured() {
    const container = document.getElementById('sidebarFeatured');
    const widget    = document.getElementById('sidebarFeaturedWidget');
    if (!container) return;

    const featured = newsData.filter(p => p.featured);
    if (featured.length === 0) {
        if (widget) widget.style.display = 'none';
        return;
    }
    if (widget) widget.style.display = '';

    container.innerHTML = featured.map(post => `
        <li class="sidebar-featured-item" data-slug="${post.slug}">
            <span class="sidebar-featured-star">★</span>
            <div class="sidebar-featured-content">
                <span class="sidebar-featured-title">${post.title}</span>
                <span class="sidebar-featured-date">${post.dateFormatted}</span>
            </div>
        </li>
    `).join('');

    container.querySelectorAll('.sidebar-featured-item').forEach(item => {
        item.addEventListener('click', () => showPost(item.dataset.slug));
    });
}

// Post series widget (collapsible groups)
function renderSidebarSeries() {
    const container = document.getElementById('sidebarSeries');
    const widget    = document.getElementById('sidebarSeriesWidget');
    if (!container) return;

    const allSeries = getAllPostSeries();
    if (allSeries.length === 0) {
        if (widget) widget.style.display = 'none';
        return;
    }
    if (widget) widget.style.display = '';

    container.innerHTML = allSeries.map(series => {
        const posts    = getSeriesPosts(series.id);
        // Auto-expand if currently reading a post in this series
        const isActive = posts.some(p => p.slug === currentPostSlug);

        return `
            <div class="sidebar-series-group ${isActive ? 'open' : ''}" data-series="${series.id}">
                <button class="sidebar-series-header" aria-expanded="${isActive}">
                    <span class="sidebar-series-name">${series.title}</span>
                    <span class="sidebar-series-badge">${posts.length}</span>
                    <svg class="sidebar-series-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <ul class="sidebar-series-posts">
                    ${posts.map((p, i) => {
                        const isCurrent = p.slug === currentPostSlug;
                        return `
                            <li class="sidebar-series-post-item ${isCurrent ? 'active' : ''}" data-slug="${p.slug}">
                                <span class="sidebar-series-num">${i + 1}</span>
                                <span class="sidebar-series-post-title">${p.title}</span>
                            </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        `;
    }).join('');

    // Collapse / expand
    container.querySelectorAll('.sidebar-series-header').forEach(header => {
        header.addEventListener('click', () => {
            const group    = header.closest('.sidebar-series-group');
            const isOpen   = group.classList.toggle('open');
            header.setAttribute('aria-expanded', isOpen);
        });
    });

    // Click a post in the list
    container.querySelectorAll('.sidebar-series-post-item').forEach(item => {
        item.addEventListener('click', () => showPost(item.dataset.slug));
    });
}

function renderSidebarCategories() {
    const container = document.getElementById('sidebarCategories');
    if (!container) return;

    const allCategories = ['all', 'progress', 'behind-scenes', 'worldbuilding', 'craft', 'lore', 'event', 'spotlight'];
    const counts = {};
    newsData.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

    const items = [
        { key: 'all', label: 'All Posts', count: newsData.length },
        ...allCategories
            .filter(k => k !== 'all' && counts[k])
            .map(k => ({ key: k, label: getCategoryLabel(k), count: counts[k] }))
    ];

    container.innerHTML = items.map(item => `
        <li class="sidebar-category-item ${blogCurrentFilter === item.key && !currentPostSlug ? 'active' : ''}" data-category="${item.key}">
            <span class="sidebar-category-label">${item.label}</span>
            <span class="sidebar-category-count">${item.count}</span>
        </li>
    `).join('');

    container.querySelectorAll('.sidebar-category-item').forEach(item => {
        item.addEventListener('click', () => {
            blogCurrentFilter = item.dataset.category;
            blogCurrentPage   = 1;
            blogSearchQuery   = '';
            const searchInput = document.getElementById('blogSearch');
            if (searchInput) searchInput.value = '';
            const grid = document.getElementById('blogGrid');
            if (grid && grid.className !== 'blog-grid') grid.className = 'blog-grid';
            currentPostSlug = null;
            stopProgressBar();
            renderBlogPage();
            renderSidebarCategories();
            history.pushState(null, '', window.location.pathname);
        });
    });
}

function renderSidebarRecent() {
    const container = document.getElementById('sidebarRecent');
    if (!container) return;

    container.innerHTML = newsData.slice(0, 5).map(post => `
        <li class="sidebar-recent-item" data-slug="${post.slug}">
            <span class="sidebar-recent-category ${post.category}">${getCategoryLabel(post.category)}</span>
            <span class="sidebar-recent-title">${post.title}</span>
            <span class="sidebar-recent-date">${post.dateFormatted}</span>
        </li>
    `).join('');

    container.querySelectorAll('.sidebar-recent-item').forEach(item => {
        item.addEventListener('click', () => showPost(item.dataset.slug));
    });
}

function renderSidebarTags() {
    const container = document.getElementById('sidebarTags');
    if (!container) return;

    const tagCounts = {};
    newsData.forEach(post => {
        (post.tags || []).forEach(tag => { tagCounts[tag] = (tagCounts[tag] || 0) + 1; });
    });

    const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);

    container.innerHTML = tags.map(([tag, count]) => `
        <span class="sidebar-tag" data-tag="${tag}">${tag.replace(/-/g, ' ')}<sup>${count}</sup></span>
    `).join('');

    container.querySelectorAll('.sidebar-tag').forEach(tagEl => {
        tagEl.addEventListener('click', () => {
            blogSearchQuery   = tagEl.dataset.tag.replace(/-/g, ' ');
            blogCurrentFilter = 'all';
            blogCurrentPage   = 1;
            const searchInput = document.getElementById('blogSearch');
            if (searchInput) searchInput.value = blogSearchQuery;
            const grid = document.getElementById('blogGrid');
            if (grid && grid.className !== 'blog-grid') grid.className = 'blog-grid';
            currentPostSlug = null;
            stopProgressBar();
            renderBlogPage();
            renderSidebarCategories();
            history.pushState(null, '', window.location.pathname);
        });
    });
}

// ============================================
// SEARCH
// ============================================

function setupSearch() {
    const input = document.getElementById('blogSearch');
    if (!input) return;

    let debounceTimer;
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            blogSearchQuery   = input.value.trim();
            blogCurrentPage   = 1;
            blogCurrentFilter = 'all';
            const grid = document.getElementById('blogGrid');
            if (grid && grid.className !== 'blog-grid') grid.className = 'blog-grid';
            currentPostSlug = null;
            stopProgressBar();
            renderBlogPage();
            renderSidebarCategories();
            history.pushState(null, '', window.location.pathname);
        }, 300);
    });
}

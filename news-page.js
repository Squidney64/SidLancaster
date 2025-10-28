// ============================================
// NEWS PAGE SPECIFIC JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared components
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Initialize news page
    initializeNewsPage();
});

let currentFilter = 'all';
let currentPage = 0;
const MAX_SLOTS = 6; // Maximum grid slots per page

function initializeNewsPage() {
    renderNewsPage();
    setupFilters();
    setupCarousel();
}

function renderNewsPage() {
    const filteredPosts = getNewsByCategory(currentFilter);
    const postsToShow = getPostsForPage(filteredPosts, currentPage);

    renderNewsPosts(postsToShow);
    updatePaginationInfo(filteredPosts);
    updateCarouselButtons(filteredPosts);
}

function renderNewsPosts(posts) {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    newsGrid.innerHTML = posts.map(post => {
        const highlightClass = post.highlight ? 'highlight' : '';
        return `
            <article class="news-post ${highlightClass}" data-category="${post.category}">
                <span class="post-category ${post.category}">${post.category.replace('-', ' ')}</span>
                <div class="post-date">${post.dateFormatted}</div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="reading-time">${post.readingTime} min read</span>
                </div>
                <a href="news/${post.slug}.html" class="post-link">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </article>
        `;
    }).join('');
}

function getPostsForPage(posts, pageNum) {
    let postIndex = 0;

    // Skip posts from previous pages
    for (let p = 0; p < pageNum; p++) {
        let pageSlots = 0;
        let pageStartIndex = postIndex;

        while (postIndex < posts.length) {
            const post = posts[postIndex];
            const postSlots = post.highlight ? 2 : 1;

            if (pageSlots + postSlots <= MAX_SLOTS) {
                pageSlots += postSlots;
                postIndex++;
            } else {
                break;
            }
        }

        if (postIndex === pageStartIndex && postIndex < posts.length) {
            postIndex++;
        }
    }

    // Get posts for current page
    const postsForPage = [];
    let currentSlots = 0;

    while (postIndex < posts.length) {
        const post = posts[postIndex];
        const postSlots = post.highlight ? 2 : 1;

        if (currentSlots + postSlots <= MAX_SLOTS) {
            postsForPage.push(post);
            currentSlots += postSlots;
            postIndex++;
        } else {
            break;
        }
    }

    return postsForPage;
}

function getTotalPages(posts) {
    let pages = 0;
    let postIndex = 0;

    while (postIndex < posts.length) {
        let pageSlots = 0;
        let pageStartIndex = postIndex;

        while (postIndex < posts.length) {
            const post = posts[postIndex];
            const postSlots = post.highlight ? 2 : 1;

            if (pageSlots + postSlots <= MAX_SLOTS) {
                pageSlots += postSlots;
                postIndex++;
            } else {
                break;
            }
        }

        if (postIndex === pageStartIndex && postIndex < posts.length) {
            postIndex++;
        }

        pages++;
    }

    return pages;
}

function updatePaginationInfo(filteredPosts) {
    const paginationInfo = document.getElementById('paginationInfo');
    if (!paginationInfo) return;

    const totalPages = getTotalPages(filteredPosts);
    const totalPosts = filteredPosts.length;

    if (totalPages <= 1) {
        paginationInfo.innerHTML = `<p>Showing all ${totalPosts} ${totalPosts === 1 ? 'post' : 'posts'}</p>`;
    } else {
        paginationInfo.innerHTML = `<p>Page ${currentPage + 1} of ${totalPages} (${totalPosts} total ${totalPosts === 1 ? 'post' : 'posts'})</p>`;
    }
}

function updateCarouselButtons(filteredPosts) {
    const totalPages = getTotalPages(filteredPosts);
    const prevBtn = document.getElementById('newsPrevBtn');
    const nextBtn = document.getElementById('newsNextBtn');

    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages - 1;
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Reset to first page
            currentPage = 0;

            // Filter posts
            currentFilter = btn.dataset.category;
            renderNewsPage();
        });
    });
}

function setupCarousel() {
    const prevBtn = document.getElementById('newsPrevBtn');
    const nextBtn = document.getElementById('newsNextBtn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                renderNewsPage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const filteredPosts = getNewsByCategory(currentFilter);
            const totalPages = getTotalPages(filteredPosts);

            if (currentPage < totalPages - 1) {
                currentPage++;
                renderNewsPage();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

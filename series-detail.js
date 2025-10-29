// ============================================
// SERIES DETAIL PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get series slug from URL
    const path = window.location.pathname;
    const seriesSlug = path.split('/').pop().replace('.html', '');

    // Load series data
    const series = seriesData[seriesSlug];

    if (series) {
        renderSeriesHero(series);
        renderSeriesOverview(series);
        renderSeriesBooks(series);
        renderSeriesNews(series);
    }
});

// Render series hero section
function renderSeriesHero(series) {
    const container = document.getElementById('seriesHeroContent');
    if (!container) return;

    container.innerHTML = `
        <div class="series-badge">${series.status}</div>
        <h1>${series.name}</h1>
        <p class="series-hero-tagline">${series.tagline}</p>
        <div class="series-meta">
            <span class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                </svg>
                ${series.publishedBooks} of ${series.plannedBooks} Books
            </span>
            <span class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v20M2 12h20" stroke-width="2" stroke-linecap="round"/>
                </svg>
                ${series.genre}
            </span>
        </div>
    `;
}

// Render series overview
function renderSeriesOverview(series) {
    const container = document.getElementById('seriesOverviewContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="series-overview-card">
            <h2>About the Series</h2>
            <p class="series-description">${series.description}</p>

            ${series.themes && series.themes.length > 0 ? `
                <div class="themes-section">
                    <h3>Themes</h3>
                    <div class="themes-grid">
                        ${series.themes.map(theme => `
                            <div class="theme-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>${theme}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="series-info-section">
                <div class="info-column">
                    <h3>World Setting</h3>
                    <p>${series.worldBuilding}</p>
                </div>

                ${series.contentWarnings && series.contentWarnings.length > 0 ? `
                    <div class="info-column">
                        <h3>Content Notes</h3>
                        <ul class="content-warnings-list">
                            ${series.contentWarnings.map(warning => `<li>${warning}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>

            <div class="series-stats">
                <div class="stat">
                    <span class="stat-value">${series.plannedBooks}</span>
                    <span class="stat-label">Planned Books</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${series.publishedBooks}</span>
                    <span class="stat-label">Published</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${series.readingOrder === 'chronological' ? 'Sequential' : 'Any Order'}</span>
                    <span class="stat-label">Reading Order</span>
                </div>
            </div>
        </div>
    `;
}

// Render books in series
function renderSeriesBooks(series) {
    const container = document.getElementById('seriesBooksGrid');
    if (!container) return;

    if (!series.books || series.books.length === 0) {
        container.innerHTML = `
            <div class="no-books">
                <p>Books in this series are currently in development. Check back soon!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = series.books.map(bookSlug => {
        const book = booksData[bookSlug];
        if (!book) return '';

        return `
            <div class="series-book-card">
                <a href="../books/${book.slug}.html">
                    <div class="book-cover-placeholder">
                        <svg class="book-cover-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        ${book.seriesNumber ? `<div class="book-number-badge">${book.seriesNumber}</div>` : ''}
                    </div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p class="book-status">${book.published ? 'Published' : book.status}</p>
                        ${!book.published ? `
                            <div class="book-progress-mini">
                                <div class="progress-bar-mini">
                                    <div class="progress-fill-mini" style="width: ${Math.round((book.wordCount / book.targetWordCount) * 100)}%"></div>
                                </div>
                                <span class="progress-text-mini">${Math.round((book.wordCount / book.targetWordCount) * 100)}% complete</span>
                            </div>
                        ` : ''}
                        <p class="book-synopsis-short">${book.synopsis}</p>
                    </div>
                </a>
            </div>
        `;
    }).join('');
}

// Render series news
function renderSeriesNews(series) {
    const container = document.getElementById('seriesNewsGrid');
    if (!container) return;

    // Get news posts tagged with this series
    const seriesNews = newsData
        .filter(post => post.tags && (post.tags.includes(series.slug) || post.tags.includes(series.id)))
        .slice(0, 3);

    if (seriesNews.length === 0) {
        container.innerHTML = `
            <div class="no-news">
                <p>No updates yet for this series. Check back soon!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = seriesNews.map(post => {
        return `
            <article class="news-post-preview">
                <span class="post-category ${post.category}">${post.category.replace('-', ' ')}</span>
                <div class="post-date">${post.dateFormatted}</div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="../news/${post.slug}.html" class="post-link">
                    Read More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </article>
        `;
    }).join('');
}

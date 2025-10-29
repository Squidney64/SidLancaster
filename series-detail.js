// ============================================
// SERIES DETAIL PAGE - OVERHAULED
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

// Render enhanced series hero section
function renderSeriesHero(series) {
    const container = document.getElementById('seriesHeroContent');
    if (!container) return;

    container.innerHTML = `
        <div class="series-hero-inner">
            <div class="series-badge-container">
                <span class="series-badge ${series.status.toLowerCase()}">${series.status}</span>
                <span class="series-genre-badge">${series.genre}</span>
            </div>

            <h1 class="series-title-large">${series.name}</h1>

            <p class="series-hero-tagline-large">${series.tagline}</p>

            <div class="series-meta-enhanced">
                <div class="meta-item-large">
                    <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div class="meta-text">
                        <span class="meta-value">${series.publishedBooks} of ${series.plannedBooks}</span>
                        <span class="meta-label">Books in Series</span>
                    </div>
                </div>

                <div class="meta-divider"></div>

                <div class="meta-item-large">
                    <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="meta-text">
                        <span class="meta-value">${series.readingOrder === 'chronological' ? 'Sequential' : 'Standalone'}</span>
                        <span class="meta-label">Reading Order</span>
                    </div>
                </div>

                <div class="meta-divider"></div>

                <div class="meta-item-large">
                    <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke-width="2"/>
                        <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div class="meta-text">
                        <span class="meta-value">${series.status}</span>
                        <span class="meta-label">Status</span>
                    </div>
                </div>
            </div>

            <div class="series-cta-buttons">
                <a href="#series-books" class="btn btn-primary btn-large">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Explore Books
                </a>
                <a href="#newsletter" class="btn btn-secondary btn-large">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke-width="2"/>
                        <polyline points="22,6 12,13 2,6" stroke-width="2"/>
                    </svg>
                    Get Updates
                </a>
            </div>
        </div>
    `;
}

// Render enhanced series overview
function renderSeriesOverview(series) {
    const container = document.getElementById('seriesOverviewContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="series-overview-enhanced">
            <!-- Main Description Section -->
            <div class="series-description-card">
                <div class="card-icon-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>About the Series</h2>
                </div>
                <p class="series-description-text">${series.description}</p>
            </div>

            <!-- Two Column Layout -->
            <div class="series-info-grid">
                <!-- Themes & World Building -->
                <div class="info-card-enhanced">
                    <div class="card-icon-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <polygon points="12 2 2 7 12 12 22 7 12 2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <polyline points="2 17 12 22 22 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <polyline points="2 12 12 17 22 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3>Themes & Elements</h3>
                    </div>

                    ${series.themes && series.themes.length > 0 ? `
                        <div class="themes-grid-enhanced">
                            ${series.themes.map(theme => `
                                <div class="theme-tag">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>${theme}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <div class="world-building-section">
                        <h4>World Setting</h4>
                        <p>${series.worldBuilding}</p>
                    </div>

                    ${series.magicSystem ? `
                        <div class="magic-system-section">
                            <h4>Magic System</h4>
                            <p>${series.magicSystem}</p>
                        </div>
                    ` : ''}
                </div>

                <!-- Stats & Info -->
                <div class="info-card-enhanced">
                    <div class="card-icon-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <line x1="18" y1="20" x2="18" y2="10" stroke-width="2" stroke-linecap="round"/>
                            <line x1="12" y1="20" x2="12" y2="4" stroke-width="2" stroke-linecap="round"/>
                            <line x1="6" y1="20" x2="6" y2="14" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <h3>Series Information</h3>
                    </div>

                    <div class="series-stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div class="stat-content">
                                <span class="stat-value-large">${series.plannedBooks}</span>
                                <span class="stat-label-large">Planned Books</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="stat-content">
                                <span class="stat-value-large">${series.publishedBooks}</span>
                                <span class="stat-label-large">Published</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" stroke-width="2"/>
                                    <polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="stat-content">
                                <span class="stat-value-large">${series.bookCount || series.books.length}</span>
                                <span class="stat-label-large">Current Books</span>
                            </div>
                        </div>
                    </div>

                    ${series.contentWarnings && series.contentWarnings.length > 0 ? `
                        <div class="content-warnings-enhanced">
                            <h4>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <line x1="12" y1="9" x2="12" y2="13" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Content Notes
                            </h4>
                            <ul class="content-warnings-list-enhanced">
                                ${series.contentWarnings.map(warning => `
                                    <li>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <circle cx="12" cy="12" r="10" stroke-width="2"/>
                                            <line x1="12" y1="8" x2="12" y2="12" stroke-width="2" stroke-linecap="round"/>
                                            <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                        ${warning}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Render enhanced books in series
function renderSeriesBooks(series) {
    const container = document.getElementById('seriesBooksGrid');
    if (!container) return;

    if (!series.books || series.books.length === 0) {
        container.innerHTML = `
            <div class="no-books-enhanced">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h3>Coming Soon</h3>
                <p>Books in this series are currently in development. Check back soon!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = series.books.map((bookSlug, index) => {
        const book = booksData[bookSlug];
        if (!book) return '';

        const progress = book.published ? 100 : Math.round((book.wordCount / book.targetWordCount) * 100);

        return `
            <article class="series-book-card-enhanced">
                <a href="../books/${book.slug}.html">
                    <div class="book-card-header">
                        <div class="book-number-large">${index + 1}</div>
                        <div class="book-status-badge ${book.published ? 'published' : book.currentStage?.toLowerCase() || 'drafting'}">
                            ${book.published ? 'Published' : book.currentStage || 'In Progress'}
                        </div>
                    </div>

                    <div class="book-cover-enhanced">
                        <div class="book-cover-placeholder-large">
                            <svg class="book-icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <div class="book-overlay-gradient"></div>
                        </div>
                    </div>

                    <div class="book-info-enhanced">
                        <h3 class="book-title-large">${book.title}</h3>
                        ${book.seriesNumber ? `<p class="book-series-number">${book.seriesNumber}</p>` : ''}

                        ${!book.published ? `
                            <div class="book-progress-enhanced">
                                <div class="progress-info">
                                    <span class="progress-label">Writing Progress</span>
                                    <span class="progress-percentage">${progress}%</span>
                                </div>
                                <div class="progress-bar-enhanced">
                                    <div class="progress-fill-enhanced" style="width: ${progress}%">
                                        <div class="progress-shine"></div>
                                    </div>
                                </div>
                                <div class="word-count-info">
                                    <span>${book.wordCount?.toLocaleString() || '0'} / ${book.targetWordCount?.toLocaleString() || '200,000'} words</span>
                                </div>
                            </div>
                        ` : book.releaseDate ? `
                            <div class="release-info">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="8" y1="2" x2="8" y2="6" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
                                </svg>
                                Released ${book.releaseDate}
                            </div>
                        ` : ''}

                        <p class="book-synopsis-enhanced">${book.synopsis}</p>

                        <div class="book-card-footer">
                            <span class="read-more-link">
                                Read More
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <line x1="5" y1="12" x2="19" y2="12" stroke-width="2" stroke-linecap="round"/>
                                    <polyline points="12 5 19 12 12 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </a>
            </article>
        `;
    }).join('');
}

// Render series news (matching news page style)
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

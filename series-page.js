// ============================================
// SERIES PAGE SPECIFIC JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared components
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Initialize series page
    initializeSeriesPage();
});

function initializeSeriesPage() {
    // Get series slug from URL
    const pathParts = window.location.pathname.split('/');
    const seriesSlug = pathParts[pathParts.length - 1].replace('.html', '');

    const series = getSeriesBySlug(seriesSlug);
    if (!series) {
        console.error('Series not found:', seriesSlug);
        return;
    }

    renderSeriesHero(series);
    renderSeriesOverview(series);
    renderSeriesBooks(series);
    renderSeriesNews(series);
}

function renderSeriesHero(series) {
    const container = document.getElementById('seriesHeroContent');
    if (!container) return;

    const statusBadge = series.status === 'Active'
        ? '<span class="series-status active">Active Series</span>'
        : '<span class="series-status">Completed Series</span>';

    container.innerHTML = `
        <div class="series-hero-text">
            <h1 class="series-title">${series.name}</h1>
            <p class="series-tagline">${series.tagline}</p>
            ${statusBadge}
            <div class="series-stats">
                <div class="series-stat">
                    <span class="stat-value">${series.bookCount}</span>
                    <span class="stat-label">${series.bookCount === 1 ? 'Book' : 'Books'}</span>
                </div>
                <div class="series-stat">
                    <span class="stat-value">${series.plannedBooks}</span>
                    <span class="stat-label">Planned</span>
                </div>
                <div class="series-stat">
                    <span class="stat-value">${series.genre}</span>
                    <span class="stat-label">Genre</span>
                </div>
            </div>
        </div>
    `;
}

function renderSeriesOverview(series) {
    const container = document.getElementById('seriesOverviewContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="series-overview-section">
            <h2>About the Series</h2>
            <p class="series-description">${series.description}</p>
        </div>

        <div class="series-overview-grid">
            <div class="series-overview-card">
                <div class="overview-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3>Core Themes</h3>
                </div>
                <ul class="theme-list">
                    ${series.themes.map(theme => `<li>${theme}</li>`).join('')}
                </ul>
            </div>

            <div class="series-overview-card">
                <div class="overview-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke-width="2"/>
                        <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <h3>World & Setting</h3>
                </div>
                <p class="overview-text">${series.worldBuilding}</p>
            </div>

            <div class="series-overview-card">
                <div class="overview-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h3>Magic System</h3>
                </div>
                <p class="overview-text">${series.magicSystem}</p>
            </div>

            <div class="series-overview-card">
                <div class="overview-card-header">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <h3>Reading Order</h3>
                </div>
                <p class="overview-text">This series is best enjoyed in ${series.readingOrder} order. Each book builds upon the previous installments, deepening the world and character arcs.</p>
            </div>

            ${series.contentWarnings && series.contentWarnings.length > 0 ? `
                <div class="series-overview-card">
                    <div class="overview-card-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="12" y1="9" x2="12" y2="13" stroke-width="2" stroke-linecap="round"/>
                            <line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <h3>Series Content Notes</h3>
                    </div>
                    <ul class="theme-list">
                        ${series.contentWarnings.map(warning => `<li>${warning}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function renderSeriesBooks(series) {
    const container = document.getElementById('seriesBooksGrid');
    if (!container) return;

    // Get all books in this series, sorted by series number
    const seriesBooks = Object.values(booksData)
        .filter(book => book.series === series.slug)
        .sort((a, b) => {
            const numA = parseInt(a.seriesNumber.replace(/\D/g, ''));
            const numB = parseInt(b.seriesNumber.replace(/\D/g, ''));
            return numA - numB;
        });

    container.innerHTML = seriesBooks.map(book => {
        // Calculate progress
        const stages = ['Prewriting', 'Drafting', 'Revising', 'Editing', 'Publishing', 'Published'];
        const currentStageIndex = stages.indexOf(book.currentStage);
        const isPublished = book.currentStage === 'Published';
        const stagesCompleted = currentStageIndex;
        const progressInCurrentStage = isPublished ? 1 : (book.stageProgress / 100);
        const overallProgress = isPublished ? 100 : ((stagesCompleted + progressInCurrentStage) / stages.length * 100).toFixed(0);

        return `
            <article class="series-book-card">
                <div class="book-cover-container">
                    <div class="book-cover-placeholder">
                        <svg class="book-cover-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="book-number">${book.seriesNumber}</span>
                    </div>
                </div>
                <div class="book-card-content">
                    <span class="book-badge series-badge">${book.seriesNumber}</span>
                    <h3 class="book-card-title">${book.title}</h3>
                    <p class="book-card-synopsis">${book.synopsis}</p>

                    <div class="book-progress-mini">
                        <div class="progress-mini-header">
                            <span class="progress-mini-label">${book.status}</span>
                            <span class="progress-mini-percentage">${overallProgress}%</span>
                        </div>
                        <div class="progress-bar-mini">
                            <div class="progress-bar-mini-fill" style="width: ${overallProgress}%"></div>
                        </div>
                    </div>

                    ${isPublished
                        ? `<a href="../books/${book.slug}.html" class="btn btn-primary">Read More</a>`
                        : `<a href="../books/${book.slug}.html" class="btn btn-secondary">Read More</a>`
                    }
                </div>
            </article>
        `;
    }).join('');
}

function renderSeriesNews(series) {
    const container = document.getElementById('seriesNewsGrid');
    if (!container) return;

    // Get news posts tagged with this series
    const seriesNews = newsData
        .filter(post => post.tags && post.tags.includes(series.slug))
        .slice(0, 3); // Get latest 3

    if (seriesNews.length === 0) {
        container.innerHTML = `
            <div class="no-news">
                <p>No news updates yet for this series. Check back soon!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = seriesNews.map(post => {
        return `
            <article class="news-post-preview" data-category="${post.category}">
                <span class="post-category ${post.category}">${post.category.replace('-', ' ')}</span>
                <div class="post-date">${post.dateFormatted}</div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="reading-time">${post.readingTime} min read</span>
                </div>
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

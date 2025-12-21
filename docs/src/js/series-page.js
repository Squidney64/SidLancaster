// ============================================
// ALL SERIES PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize shared components (navigation, etc.)
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Initialize page
    renderSeries();
    setupFilters();
});

let currentFilter = 'all';
let allSeries = [];

// Prepare series data
function prepareSeriesData() {
    allSeries = Object.values(seriesData).map(series => ({
        ...series,
        statusCategory: series.status.toLowerCase()
    }));
}

// Render all series
function renderSeries() {
    prepareSeriesData();
    const grid = document.getElementById('seriesGrid');
    if (!grid) return;

    let filteredSeries = filterSeries(allSeries);

    if (filteredSeries.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <p>No series found matching your filters.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredSeries.map(series => `
        <article class="series-card-large" data-status="${series.statusCategory}">
            <a href="series/${series.slug}.html" class="series-card-link">
                <div class="series-card-header">
                    <div class="series-meta">
                        <span class="series-status-badge ${series.statusCategory}">${series.status}</span>
                        <span class="series-book-count">${series.publishedBooks} of ${series.plannedBooks} published</span>
                    </div>
                    <h2 class="series-card-title">${series.name}</h2>
                    <p class="series-tagline">${series.tagline}</p>
                </div>

                <div class="series-card-body">
                    <p class="series-description">${series.description}</p>

                    <div class="series-info-grid">
                        <div class="series-info-item">
                            <span class="info-label">Genre</span>
                            <span class="info-value">${series.genre}</span>
                        </div>
                        <div class="series-info-item">
                            <span class="info-label">World Setting</span>
                            <span class="info-value">${series.worldSetting}</span>
                        </div>
                        <div class="series-info-item">
                            <span class="info-label">Reading Order</span>
                            <span class="info-value">${series.readingOrder === 'chronological' ? 'Chronological' : 'Any Order'}</span>
                        </div>
                        <div class="series-info-item">
                            <span class="info-label">Planned Books</span>
                            <span class="info-value">${series.plannedBooks} books</span>
                        </div>
                    </div>

                    ${series.themes && series.themes.length > 0 ? `
                        <div class="series-themes">
                            <h4>Themes</h4>
                            <div class="theme-tags">
                                ${series.themes.slice(0, 4).map(theme => `<span class="theme-tag">${theme}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${series.books && series.books.length > 0 ? `
                        <div class="series-books-preview">
                            <h4>Books in Series</h4>
                            <ul class="books-list">
                                ${series.books.map(bookSlug => {
                                    const book = booksData[bookSlug];
                                    if (!book) return '';
                                    return `
                                        <li>
                                            <span class="book-number">${book.seriesNumber}</span>
                                            <span class="book-title-small">${book.title}</span>
                                            <span class="book-status-small ${book.published ? 'published' : 'upcoming'}">
                                                ${book.published ? 'Published' : book.currentStage}
                                            </span>
                                        </li>
                                    `;
                                }).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>

                <div class="series-card-footer">
                    <span class="explore-series">Explore Series →</span>
                </div>
            </a>
        </article>
    `).join('');
}

// Filter series
function filterSeries(series) {
    if (currentFilter === 'all') return series;
    return series.filter(s => s.statusCategory === currentFilter);
}

// Setup filter buttons
function setupFilters() {
    const filterBtns = document.querySelectorAll('.series-filters .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and re-render
            currentFilter = btn.dataset.filter;
            renderSeries();
        });
    });
}

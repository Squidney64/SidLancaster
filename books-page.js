// ============================================
// ALL BOOKS PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    renderBooks();
    setupFilters();
    setupSort();
});

let currentFilter = 'all';
let currentSort = 'release-date';
let allBooks = [];

// Prepare books data
function prepareBooksData() {
    allBooks = Object.values(booksData).map(book => ({
        ...book,
        statusCategory: book.published ? 'published' :
                       book.currentStage === 'Drafting' || book.currentStage === 'Prewriting' ? 'drafting' :
                       'upcoming'
    }));
}

// Render all books
function renderBooks() {
    prepareBooksData();
    const grid = document.getElementById('booksGrid');
    if (!grid) return;

    let filteredBooks = filterBooks(allBooks);
    filteredBooks = sortBooks(filteredBooks);

    if (filteredBooks.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <p>No books found matching your filters.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredBooks.map(book => `
        <article class="book-card" data-status="${book.statusCategory}">
            <a href="books/${book.slug}.html" class="book-card-link">
                <div class="book-card-cover">
                    <div class="book-cover-placeholder">
                        <svg class="book-cover-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <div class="book-cover-status">${book.releaseEstimate}</div>
                    </div>
                    ${!book.published ? `<div class="book-status-badge ${book.statusCategory}">${book.statusCategory === 'drafting' ? 'In Progress' : 'Coming Soon'}</div>` : ''}
                </div>

                <div class="book-card-content">
                    <div class="book-card-meta">
                        ${book.seriesNumber ? `<span class="book-badge series">${book.seriesNumber}</span>` : ''}
                        <span class="book-badge">${book.seriesName}</span>
                    </div>
                    <h3 class="book-card-title">${book.title}</h3>
                    <p class="book-card-synopsis">${book.synopsis}</p>

                    ${!book.published ? `
                        <div class="book-card-progress">
                            <div class="progress-bar-mini">
                                <div class="progress-fill-mini" style="width: ${Math.round((book.wordCount / book.targetWordCount) * 100)}%"></div>
                            </div>
                            <span class="progress-text">${Math.round((book.wordCount / book.targetWordCount) * 100)}% complete • ${book.currentStage}</span>
                        </div>
                    ` : ''}

                    <div class="book-card-genres">
                        ${Array.isArray(book.genre) ? book.genre.slice(0, 3).map(g => `<span class="genre-tag">${g}</span>`).join('') : `<span class="genre-tag">${book.genre}</span>`}
                    </div>
                </div>
            </a>
        </article>
    `).join('');
}

// Filter books
function filterBooks(books) {
    if (currentFilter === 'all') return books;
    return books.filter(book => book.statusCategory === currentFilter);
}

// Sort books
function sortBooks(books) {
    const sorted = [...books];

    switch(currentSort) {
        case 'title':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));

        case 'series':
            return sorted.sort((a, b) => {
                const seriesCompare = a.seriesName.localeCompare(b.seriesName);
                if (seriesCompare !== 0) return seriesCompare;
                return (a.seriesNumber || '').localeCompare(b.seriesNumber || '');
            });

        case 'release-date':
        default:
            // Sort by published first, then by estimated release/current progress
            return sorted.sort((a, b) => {
                if (a.published && !b.published) return -1;
                if (!a.published && b.published) return 1;

                // For unpublished, prioritize by stage progress
                const stageOrder = {
                    'Published': 6,
                    'Publishing': 5,
                    'Editing': 4,
                    'Revising': 3,
                    'Drafting': 2,
                    'Prewriting': 1
                };

                return (stageOrder[b.currentStage] || 0) - (stageOrder[a.currentStage] || 0);
            });
    }
}

// Setup filter buttons
function setupFilters() {
    const filterBtns = document.querySelectorAll('.books-filters .filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update filter and re-render
            currentFilter = btn.dataset.filter;
            renderBooks();
        });
    });
}

// Setup sort dropdown
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderBooks();
    });
}

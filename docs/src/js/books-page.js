// ============================================
// ALL BOOKS PAGE - STREAMLINED VERSION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize shared components (navigation, etc.)
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Initialize page
    renderBooks();
    setupFilters();
    updateFilterCounts();
});

let currentFilter = 'all';
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

// Update filter counts
function updateFilterCounts() {
    prepareBooksData();

    const counts = {
        all: allBooks.length,
        published: allBooks.filter(b => b.statusCategory === 'published').length,
        drafting: allBooks.filter(b => b.statusCategory === 'drafting').length,
        upcoming: allBooks.filter(b => b.statusCategory === 'upcoming').length
    };

    document.getElementById('countAll').textContent = counts.all;
    document.getElementById('countPublished').textContent = counts.published;
    document.getElementById('countDrafting').textContent = counts.drafting;
    document.getElementById('countUpcoming').textContent = counts.upcoming;
}

// Render all books
function renderBooks() {
    prepareBooksData();
    const grid = document.getElementById('booksGrid');
    const emptyState = document.getElementById('emptyState');

    if (!grid) return;

    let filteredBooks = filterBooks(allBooks);

    // Handle empty state
    if (filteredBooks.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'flex';
        return;
    }

    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = filteredBooks.map(book => {
        const progress = book.targetWordCount > 0 ? Math.round((book.wordCount / book.targetWordCount) * 100) : 0;
        const statusText = book.statusCategory === 'published' ? 'Published' :
                          book.statusCategory === 'drafting' ? 'In Progress' : 'Coming Soon';
        const statusIcon = book.statusCategory === 'published' ?
            '<path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' :
            book.statusCategory === 'drafting' ?
            '<path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' :
            '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>';

        return `
        <article class="book-card-new" data-status="${book.statusCategory}">
            <a href="/books/${book.slug}" class="book-card-link-new">
                <!-- Book Cover Section -->
                <div class="book-cover-section">
                    <div class="book-cover-art">
                        <div class="cover-placeholder">
                            <div class="cover-bg-pattern"></div>
                            <svg class="cover-book-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                            <div class="cover-title">${book.title}</div>
                        </div>
                    </div>
                    <div class="book-status-indicator ${book.statusCategory}">
                        <svg viewBox="0 0 24 24" class="book-status-icon">
                            ${statusIcon}
                        </svg>
                        <span>${statusText}</span>
                    </div>
                </div>

                <!-- Book Info Section -->
                <div class="book-info-section">
                    <!-- Series & Title -->
                    <div class="book-header">
                        <div class="book-series-info">
                            ${book.seriesNumber ? `<span class="series-number">${book.seriesNumber}</span>` : ''}
                            <span class="series-name">${book.seriesName}</span>
                        </div>
                        <h3 class="book-title">${book.title}</h3>
                    </div>

                    <!-- Synopsis -->
                    <p class="book-synopsis">${book.synopsis}</p>

                    <!-- Progress (if not published) -->
                    ${!book.published && book.targetWordCount > 0 ? `
                        <div class="book-progress-section">
                            <div class="progress-info">
                                <span class="progress-label">
                                    <svg viewBox="0 0 24 24" class="progress-icon">
                                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    ${book.currentStage}
                                </span>
                                <span class="progress-percent">${progress}%</span>
                            </div>
                            <div class="progress-bar-container">
                                <div class="progress-bar-track">
                                    <div class="progress-bar-fill" style="width: ${progress}%">
                                        <div class="progress-bar-glow"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-stats">
                                <span class="stat-item">
                                    <svg viewBox="0 0 24 24" class="stat-icon">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="2" fill="none"/>
                                        <polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="2" fill="none"/>
                                    </svg>
                                    ${book.wordCount.toLocaleString()} words
                                </span>
                                <span class="stat-item">
                                    <svg viewBox="0 0 24 24" class="stat-icon">
                                        <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                                    </svg>
                                    ${book.targetWordCount.toLocaleString()} target
                                </span>
                                <span class="stat-item">
                                    <svg viewBox="0 0 24 24" class="stat-icon">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                                        <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
                                    </svg>
                                    ${book.releaseEstimate || 'TBA'}
                                </span>
                            </div>
                        </div>
                    ` : book.published ? `
                        <div class="book-published-info">
                            <span class="published-label">
                                <svg viewBox="0 0 24 24" class="published-icon">
                                    <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Available Now
                            </span>
                        </div>
                    ` : ''}

                    <!-- Genres & CTA -->
                    <div class="book-footer">
                        <div class="book-genres">
                            ${Array.isArray(book.genre) ? book.genre.slice(0, 3).map(g => `
                                <span class="genre-pill">${g}</span>
                            `).join('') : `<span class="genre-pill">${book.genre}</span>`}
                        </div>
                        <div class="book-cta">
                            <span class="cta-text">View Details</span>
                            <svg viewBox="0 0 24 24" class="cta-arrow">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    `;
    }).join('');

    // Add hover effects for book cards
    addCardInteractivity();
}

// Filter books
function filterBooks(books) {
    if (currentFilter === 'all') return books;
    return books.filter(book => book.statusCategory === currentFilter);
}

// Setup filter buttons
function setupFilters() {
    const filterBtns = document.querySelectorAll('.quick-filter');

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

// Add card interactivity
function addCardInteractivity() {
    const bookCards = document.querySelectorAll('.book-card-new');

    bookCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
}

// ============================================
// BOOK PAGE SPECIFIC JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared components
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Initialize book page
    initializeBookPage();
});

let currentBook = null;

function initializeBookPage() {
    // Get book slug from URL
    const pathParts = window.location.pathname.split('/');
    const bookSlug = pathParts[pathParts.length - 1].replace('.html', '');

    currentBook = getBookBySlug(bookSlug);
    if (!currentBook) {
        console.error('Book not found:', bookSlug);
        return;
    }

    renderBookHero(currentBook);
    renderOverviewTab(currentBook);
    renderCharactersTab(currentBook);
    renderSampleTab(currentBook);
    renderProgressTab(currentBook);
    renderRelatedNews(currentBook);
    setupTabs();
}

function renderBookHero(book) {
    const container = document.getElementById('bookHeroContent');
    if (!container) return;

    const series = getSeriesBySlug(book.series);
    const isPublished = book.currentStage === 'Published';

    container.innerHTML = `
        <div class="book-hero-cover">
            <div class="book-cover-large">
                <svg class="book-cover-icon-large" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>

        <div class="book-hero-info">
            <div class="book-hero-badges">
                <span class="book-badge series">${book.seriesNumber}</span>
                ${series ? `<a href="../series/${series.slug}.html" class="book-badge badge-link">${series.name}</a>` : `<span class="book-badge">${book.seriesName}</span>`}
            </div>
            <h1 class="book-hero-title">${book.title}</h1>
            <p class="book-hero-synopsis">${book.synopsis}</p>

            <div class="book-hero-meta">
                <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke-width="2"/>
                        <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>${book.status}</span>
                </div>
                <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${book.genre.join(', ')}</span>
                </div>
                <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <polyline points="14 2 14 8 20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${book.wordCount.toLocaleString()} words</span>
                </div>
            </div>

            ${isPublished
                ? `<div class="book-hero-actions">
                    <a href="#" class="btn btn-primary btn-large">Buy Now</a>
                    <a href="#sample" class="btn btn-secondary btn-large">Read Sample</a>
                </div>`
                : `<div class="book-hero-actions">
                    <a href="#progress" class="btn btn-primary btn-large">Track Progress</a>
                </div>`
            }
        </div>
    `;
}

function renderOverviewTab(book) {
    const container = document.getElementById('overview-tab');
    if (!container) return;

    const themes = book.themes || [];
    const pov = book.pov || 'Multiple POV';
    const tone = book.tone || [];

    container.innerHTML = `
        <div class="overview-content">
            <div class="overview-main">
                <h2>About the Book</h2>
                <p class="book-description">${book.fullDescription || book.synopsis}</p>

                <div class="overview-grid">
                    <div class="overview-card">
                        <h3>Themes</h3>
                        <ul class="theme-tags">
                            ${themes.map(theme => `<li>${theme}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="overview-card">
                        <h3>Story Details</h3>
                        <ul class="detail-list">
                            <li><strong>Point of View:</strong> ${pov}</li>
                            <li><strong>Tone:</strong> ${tone.join(', ') || 'Dark, Epic'}</li>
                            <li><strong>Length:</strong> ${book.targetWordCount.toLocaleString()} words (est.)</li>
                            <li><strong>Release:</strong> ${book.releaseEstimate}</li>
                        </ul>
                    </div>
                </div>

                ${book.contentWarnings && book.contentWarnings.length > 0 ? `
                    <div class="content-warnings-section">
                        <h3>⚠ Content Warnings</h3>
                        <p class="warnings-intro">This book contains mature themes that may not be suitable for all readers. Please review the content notes below:</p>
                        <ul class="warnings-list">
                            ${book.contentWarnings.map((warning, i) => `
                                <li>
                                    <strong>${warning}:</strong> ${book.contentWarningsDesc && book.contentWarningsDesc[i] ? book.contentWarningsDesc[i] : 'Contains mature content.'}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function renderCharactersTab(book) {
    const container = document.getElementById('characters-tab');
    if (!container) return;

    const characters = book.mainCharacters || [];

    if (characters.length === 0) {
        container.innerHTML = `
            <div class="no-content">
                <p>Character details will be revealed closer to publication!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="characters-content">
            <h2>Main Characters</h2>
            <div class="characters-grid">
                ${characters.map(char => `
                    <div class="character-card">
                        <div class="character-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="7" r="4" stroke-width="2"/>
                            </svg>
                        </div>
                        <h3 class="character-name">${char.name}</h3>
                        <p class="character-role">${char.role}</p>
                        <p class="character-description">${char.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSampleTab(book) {
    const container = document.getElementById('sample-tab');
    if (!container) return;

    const hasSample = book.sampleChapter && book.sampleChapter.length > 0;

    if (!hasSample) {
        container.innerHTML = `
            <div class="no-content">
                <p>A sample chapter will be available soon! Subscribe to the newsletter to be notified when it's ready.</p>
                <a href="#newsletter" class="btn btn-primary">Subscribe for Updates</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="sample-content">
            <div class="sample-header">
                <h2>Chapter 1: The Beginning</h2>
                <p class="sample-note">This is an early draft and may differ from the final published version.</p>
            </div>
            <div class="sample-text">
                ${book.sampleChapter.map(paragraph => `<p>${paragraph}</p>`).join('')}
            </div>
            <div class="sample-cta">
                <p>Want to read more?</p>
                <a href="#newsletter" class="btn btn-primary">Get Notified at Release</a>
            </div>
        </div>
    `;
}

function renderProgressTab(book) {
    const container = document.getElementById('progress-tab');
    if (!container) return;

    const stages = ['Prewriting', 'Drafting', 'Revising', 'Editing', 'Publishing', 'Published'];
    const currentStageIndex = stages.indexOf(book.currentStage);
    const isPublished = book.currentStage === 'Published';

    container.innerHTML = `
        <div class="progress-content">
            <div class="progress-header">
                <h2>Writing Journey</h2>
                <p>Follow along as this book comes to life</p>
            </div>

            <div class="progress-stats-grid">
                <div class="progress-stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <polyline points="14 2 14 8 20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <h3>${book.wordCount.toLocaleString()}</h3>
                        <p>Words Written</p>
                    </div>
                </div>

                <div class="progress-stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <h3>${Math.round((book.wordCount / book.targetWordCount) * 100)}%</h3>
                        <p>Complete</p>
                    </div>
                </div>

                <div class="progress-stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <h3>${book.status}</h3>
                        <p>Current Stage</p>
                    </div>
                </div>

                <div class="progress-stat-card">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke-width="2" stroke-linecap="round"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke-width="2" stroke-linecap="round"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="stat-info">
                        <h3>${book.releaseEstimate}</h3>
                        <p>Est. Release</p>
                    </div>
                </div>
            </div>

            <div class="progress-timeline">
                <h3>Publication Journey</h3>
                <div class="timeline">
                    ${stages.map((stage, index) => {
                        const isPast = index < currentStageIndex;
                        const isCurrent = index === currentStageIndex;
                        const statusClass = isPast ? 'completed' : isCurrent ? 'current' : 'upcoming';

                        return `
                            <div class="timeline-item ${statusClass}">
                                <div class="timeline-marker">
                                    ${isPast ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
                                </div>
                                <div class="timeline-content">
                                    <h4>${stage}</h4>
                                    ${isCurrent ? `<p class="stage-progress">${book.stageProgress}% complete</p>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="progress-updates">
                <h3>Recent Updates</h3>
                <p class="updates-cta">Check the <a href="../news.html">News page</a> for the latest writing progress updates!</p>
            </div>
        </div>
    `;
}

function renderRelatedNews(book) {
    const container = document.getElementById('relatedNewsGrid');
    if (!container) return;

    // Get news posts tagged with this book
    const bookNews = newsData
        .filter(post => post.tags && (post.tags.includes(book.slug) || post.tags.includes(book.series)))
        .slice(0, 3);

    if (bookNews.length === 0) {
        container.innerHTML = `
            <div class="no-news">
                <p>No updates yet for this book. Check back soon!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = bookNews.map(post => {
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

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const tabId = btn.dataset.tab;
            const tabContent = document.getElementById(`${tabId}-tab`);
            if (tabContent) {
                tabContent.classList.add('active');
            }

            // Scroll to tabs section smoothly
            document.querySelector('.book-details').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

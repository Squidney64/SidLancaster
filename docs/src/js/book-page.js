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
                ${series ? `<a href="/series/${series.slug}" class="book-badge badge-link">${series.name}</a>` : `<span class="book-badge">${book.seriesName}</span>`}
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
            <p class="characters-intro">Meet the key players in this epic tale of power, freedom, and destiny.</p>
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
                        ${char.traits && char.traits.length > 0 ? `
                            <div class="character-traits">
                                ${char.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                            </div>
                        ` : ''}
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
                <h2>${book.sampleChapterHeading}</h2>
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

    // Stage icons
    const stageIcons = {
        'Prewriting': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Drafting': '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Revising': '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3v5h-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Editing': '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Publishing': '<path d="M9 11l3 3L22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Published': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 4L12 14.01l-3-3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    };

    container.innerHTML = `
        <div class="progress-content">
            <div class="progress-header">
                <h2>Writing Journey</h2>
                <p>Follow along as this book comes to life</p>
            </div>

            <div class="status-details">
                <div class="status-metric">
                    <span class="metric-value">${book.wordCount.toLocaleString()}</span>
                    <span class="metric-label">Words Written</span>
                </div>
                <div class="status-metric">
                    <span class="metric-value">${book.targetWordCount.toLocaleString()}</span>
                    <span class="metric-label">Target Words</span>
                </div>
                <div class="status-metric">
                    <span class="metric-value">${Math.round((book.wordCount / book.targetWordCount) * 100)}%</span>
                    <span class="metric-label">Complete</span>
                </div>
                <div class="status-metric">
                    <span class="metric-value">${book.status}</span>
                    <span class="metric-label">Current Stage</span>
                </div>
                <div class="status-metric">
                    <span class="metric-value">${book.releaseEstimate}</span>
                    <span class="metric-label">Est. Release</span>
                </div>
            </div>

            <div class="progress-timeline">
                <h3>Publication Journey</h3>
                <div class="timeline">
                    ${stages.map((stage, index) => {
                        const isPast = index < currentStageIndex;
                        const isCurrent = index === currentStageIndex;
                        const statusClass = isPast ? 'completed' : isCurrent ? 'current' : 'upcoming';
                        const milestone = book.progressMilestones ? book.progressMilestones[stage] : null;

                        return `
                            <div class="timeline-item ${statusClass}">
                                <div class="timeline-marker">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        ${stageIcons[stage]}
                                    </svg>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-header">
                                        <h4>${stage}</h4>
                                        ${milestone && milestone.date ? `<span class="timeline-date">${milestone.date}</span>` : ''}
                                        ${milestone && milestone.estimatedStart ? `<span class="timeline-date estimated">Est. ${milestone.estimatedStart}</span>` : ''}
                                        ${milestone && milestone.estimatedDate ? `<span class="timeline-date estimated">${milestone.estimatedDate}</span>` : ''}
                                    </div>
                                    ${isCurrent ? `<p class="stage-progress">${book.stageProgress}% complete</p>` : ''}
                                    ${milestone && milestone.description ? `<p class="timeline-description">${milestone.description}</p>` : ''}
                                    ${milestone && milestone.currentFocus ? `<p class="timeline-focus"><strong>Current Focus:</strong> ${milestone.currentFocus}</p>` : ''}
                                    ${milestone && milestone.notes ? `<p class="timeline-notes"><em>${milestone.notes}</em></p>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="progress-updates">
                <h3>Recent Updates</h3>
                <p class="updates-cta">Check the <a href="/news">News page</a> for the latest writing progress updates!</p>
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
                <span class="post-category ${post.category}">${getCategoryLabel(post.category)}</span>
                <div class="post-date">${post.dateFormatted}</div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="reading-time">${post.readingTime} min read</span>
                </div>
                <a href="/blog/${post.slug}" class="post-link">
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

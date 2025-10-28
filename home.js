// ============================================
// HOME PAGE SPECIFIC JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared components
    if (window.Components && typeof Components.initializeSharedComponents === 'function') {
        Components.initializeSharedComponents();
    }

    // Render featured book
    renderFeaturedBook();

    // Render latest news
    renderLatestNews();
});

// Render featured book spotlight
function renderFeaturedBook() {
    const container = document.getElementById('featuredBookContainer');
    if (!container) return;

    // Get the first book (featured book)
    const book = booksData['the-day-when-servants-reign'];
    if (!book) return;

    // Calculate progress for the book
    const stages = ['Prewriting', 'Drafting', 'Revising', 'Editing', 'Publishing', 'Published'];
    const currentStageIndex = stages.indexOf(book.currentStage);
    const isPublished = book.currentStage === 'Published';
    const stagesCompleted = currentStageIndex;
    const progressInCurrentStage = isPublished ? 1 : (book.stageProgress / 100);
    const overallProgress = isPublished ? 100 : ((stagesCompleted + progressInCurrentStage) / stages.length * 100).toFixed(0);

    // Icon SVGs for each stage
    const stageIcons = {
        'Prewriting': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Drafting': '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Revising': '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3v5h-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Editing': '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Publishing': '<path d="M9 11l3 3L22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
        'Published': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 4L12 14.01l-3-3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    };

    container.innerHTML = `
        <div class="carousel-wrapper">
            <div class="book-card">
                <div class="book-cover-container">
                <div class="book-cover">
                    <div class="book-cover-placeholder">
                        <svg class="book-cover-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <div class="book-cover-status">${book.releaseEstimate}</div>
                    </div>
                </div>
            </div>

            <div class="book-info">
                <div class="book-header">
                    <div class="book-meta">
                        ${book.seriesNumber ? `<span class="book-badge series">${book.seriesNumber}</span>` : ''}
                        <span class="book-badge">${book.seriesName}</span>
                    </div>
                    <h3 class="book-title">${book.title}</h3>
                </div>
                <p class="book-synopsis">${book.synopsis}</p>

                <div class="book-status-tracker">
                    <div class="status-header">
                        <span class="status-title">Writing Journey</span>
                        <span class="status-percentage">${overallProgress}%</span>
                    </div>

                    <div class="status-timeline">
                        <div class="status-progress-bar" style="width: ${isPublished ? '83.33%' : `calc((100% / 6) * (${currentStageIndex} + 0.2 + ${progressInCurrentStage} * 0.6))`}"></div>
                        ${stages.map((stage, idx) => {
                            let stepClass = '';
                            if (isPublished) {
                                stepClass = 'completed published';
                            } else if (idx < currentStageIndex) {
                                stepClass = 'completed';
                            } else if (idx === currentStageIndex) {
                                stepClass = 'active';
                            }

                            return `
                                <div class="status-step ${stepClass}">
                                    <div class="status-icon">
                                        <svg viewBox="0 0 24 24">
                                            ${stageIcons[stage]}
                                        </svg>
                                    </div>
                                    <span class="status-label">${stage}</span>
                                </div>
                            `;
                        }).join('')}
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
                            <span class="metric-value">${book.status}</span>
                            <span class="metric-label">Current Stage</span>
                        </div>
                        <div class="status-metric">
                            <span class="metric-value">${book.releaseEstimate}</span>
                            <span class="metric-label">Est. Release</span>
                        </div>
                    </div>
                </div>

                <div class="book-meta-info">
                    <div class="meta-item">
                        <span class="meta-label">Genre</span>
                        <span class="meta-value">${book.genre.join(', ')}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Point of View</span>
                        <span class="meta-value">${book.pov}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Setting</span>
                        <span class="meta-value">${book.setting}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `;
}

// Render latest news posts
function renderLatestNews() {
    const container = document.getElementById('latestNewsGrid');
    if (!container) return;

    // Get posts up to 6 slots, where highlighted posts count as 2 slots
    const allPosts = newsData;
    const selectedPosts = [];
    let slotsUsed = 0;
    const maxSlots = 6;

    for (const post of allPosts) {
        const slotsNeeded = post.highlight ? 2 : 1;
        if (slotsUsed + slotsNeeded <= maxSlots) {
            selectedPosts.push(post);
            slotsUsed += slotsNeeded;
        }
        if (slotsUsed >= maxSlots) break;
    }

    container.innerHTML = selectedPosts.map(post => {
        return `
            <article class="news-post-preview ${post.highlight ? 'highlight' : ''}" data-category="${post.category}">
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

// ============================================
// SHARED COMPONENTS FOR MULTI-PAGE SITE
// ============================================

// Navigation Component
function createNavigation(currentPage = 'home', basePath = '') {
    const isActive = (page) => currentPage === page ? 'active' : '';

    return `
    <nav>
        <div class="logo">
            <a href="${basePath}index.html">
                <img src="${basePath}Logo.png" alt="Sid Lancaster">
            </a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <ul class="nav-links">
            <li>
                <a class="nav-btn ${isActive('home')}" href="${basePath}index.html">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                    <span>Home</span>
                </a>
            </li>
            <li class="nav-dropdown">
                <a class="nav-btn ${isActive('books')}" href="#books">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <path d="M22 7a2 2 0 0 0-2-2H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                    <span>Books</span>
                    <svg class="dropdown-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="${basePath}books.html">All Books</a></li>
                    <li class="divider"></li>
                    ${typeof booksData !== 'undefined' ? Object.values(booksData).map(book =>
                        `<li><a href="${basePath}books/${book.slug}.html">${book.title}</a></li>`
                    ).join('') : '<li><a href="${basePath}books/the-day-when-servants-reign.html">The Day When Servants Reign</a></li>'}
                </ul>
            </li>
            <li class="nav-dropdown">
                <a class="nav-btn ${isActive('series')}" href="#series">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M8 7h8M8 11h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>Series</span>
                    <svg class="dropdown-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none"/>
                    </svg>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="${basePath}series.html">All Series</a></li>
                    <li class="divider"></li>
                    ${typeof seriesData !== 'undefined' ? Object.values(seriesData).map(series =>
                        `<li><a href="${basePath}series/${series.slug}.html">${series.name}</a></li>`
                    ).join('') : '<li><a href="${basePath}series/severance-chronicles.html">Severance Chronicles</a></li>'}
                </ul>
            </li>
            <li>
                <a class="nav-btn ${isActive('news')}" href="${basePath}news.html">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <path d="M7 10h6M7 14h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </svg>
                    <span>News</span>
                </a>
            </li>
            <li>
                <a class="nav-btn ${isActive('about')}" href="${basePath}index.html#about">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                    <span>About</span>
                </a>
            </li>
            <li>
                <a class="nav-btn ${isActive('newsletter')}" href="${basePath}index.html#newsletter">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    </svg>
                    <span>Newsletter</span>
                </a>
            </li>
        </ul>
    </nav>
    `;
}

// Particle System Component
function createParticleSystem() {
    return `
    <div class="particles" id="particles">
        <div class="particle-layer" data-speed="-0.8"></div>
        <div class="particle-layer" data-speed="-0.65"></div>
        <div class="particle-layer" data-speed="-0.5"></div>
        <div class="particle-layer" data-speed="-0.35"></div>
        <div class="particle-layer" data-speed="-0.2"></div>
    </div>
    `;
}

// Footer Component
function createFooter() {
    return `
    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="news.html">News</a>
                <a href="about.html">About</a>
                <a href="#newsletter">Newsletter</a>
                <a href="#privacy">Privacy</a>
            </div>
            <div class="social-links-footer">
                <a href="#" class="social-link" title="Facebook" aria-label="Facebook">
                    <svg viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg>
                </a>
                <a href="#" class="social-link" title="Instagram" aria-label="Instagram">
                    <svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"/></svg>
                </a>
                <a href="#" class="social-link" title="X (Twitter)" aria-label="X">
                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" class="social-link" title="YouTube" aria-label="YouTube">
                    <svg viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
                </a>
            </div>
            <p class="copyright">&copy; 2025 Sid Lancaster. All rights reserved.</p>
        </div>
    </footer>
    `;
}

// Newsletter Signup Component
function createNewsletterSignup(compact = false) {
    const compactClass = compact ? 'newsletter-compact' : '';
    return `
    <section id="newsletter" class="newsletter-section ${compactClass}">
        <div class="newsletter-container">
            <h2>Join the Journey</h2>
            <p>Subscribe to receive updates on new releases, book progress, exclusive content, and behind-the-scenes glimpses into the worlds I'm building.</p>
            <form class="newsletter-form" onsubmit="return false;">
                <input type="email" placeholder="Your email address" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>
    `;
}

// Breadcrumb Component
function createBreadcrumb(items) {
    return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol>
            ${items.map((item, index) => {
                if (index === items.length - 1) {
                    return `<li class="breadcrumb-item active" aria-current="page">${item.label}</li>`;
                }
                return `<li class="breadcrumb-item"><a href="${item.url}">${item.label}</a></li>`;
            }).join('')}
        </ol>
    </nav>
    `;
}

// Book Card Component (for grids/lists)
function createBookCard(book, size = 'medium') {
    return `
    <div class="book-card-preview ${size}">
        <a href="books/${book.slug}.html" class="book-card-link">
            <div class="book-cover-mini">
                <svg class="book-cover-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke-width="2" stroke-linecap="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <span class="release-badge">${book.releaseEstimate}</span>
            </div>
            <div class="book-card-info">
                <div class="book-series-badge">${book.seriesName}</div>
                <h3 class="book-card-title">${book.title}</h3>
                <p class="book-card-synopsis">${book.synopsis}</p>
                <div class="book-card-meta">
                    <span class="status-badge status-${book.currentStage.toLowerCase()}">${book.currentStage}</span>
                    <span class="word-count">${book.wordCount.toLocaleString()} words</span>
                </div>
            </div>
        </a>
    </div>
    `;
}

// News Post Card Component
function createNewsPostCard(post, size = 'regular') {
    const highlightClass = post.highlight ? 'highlight' : '';
    return `
    <article class="news-post ${highlightClass} ${size}" data-category="${post.category}">
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
}

// Populate navigation dropdowns dynamically
function populateNavigationDropdowns() {
    // Populate Books dropdown
    const booksDropdown = document.querySelector('.nav-dropdown .dropdown-menu');
    if (booksDropdown && typeof booksData !== 'undefined') {
        const booksList = Object.values(booksData);
        if (booksList.length > 0) {
            // Find existing book links (everything after the divider)
            const existingLinks = Array.from(booksDropdown.querySelectorAll('li:not(.divider)'));
            existingLinks.slice(1).forEach(li => li.remove()); // Remove all but "All Books"

            // Add books from data
            booksList.forEach(book => {
                const li = document.createElement('li');
                const basePath = window.location.pathname.includes('/books/') ||
                                 window.location.pathname.includes('/series/') ||
                                 window.location.pathname.includes('/news/') ? '../' : '';
                li.innerHTML = `<a href="${basePath}books/${book.slug}.html">${book.title}</a>`;
                booksDropdown.appendChild(li);
            });
        }
    }

    // Populate Series dropdown
    const seriesDropdowns = document.querySelectorAll('.nav-dropdown');
    seriesDropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.nav-btn');
        if (btn && btn.textContent.includes('Series')) {
            const seriesMenu = dropdown.querySelector('.dropdown-menu');
            if (seriesMenu && typeof seriesData !== 'undefined') {
                const seriesList = Object.values(seriesData);
                if (seriesList.length > 0) {
                    // Find existing series links (everything after the divider)
                    const existingLinks = Array.from(seriesMenu.querySelectorAll('li:not(.divider)'));
                    existingLinks.slice(1).forEach(li => li.remove()); // Remove all but "All Series"

                    // Add series from data
                    seriesList.forEach(series => {
                        const li = document.createElement('li');
                        const basePath = window.location.pathname.includes('/books/') ||
                                         window.location.pathname.includes('/series/') ||
                                         window.location.pathname.includes('/news/') ? '../' : '';
                        li.innerHTML = `<a href="${basePath}series/${series.slug}.html">${series.name}</a>`;
                        seriesMenu.appendChild(li);
                    });
                }
            }
        }
    });
}

// Initialize shared functionality
function initializeSharedComponents() {
    // Populate navigation dropdowns first
    populateNavigationDropdowns();

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');

            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking nav links
        navLinks.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-btn');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
}

// Export for use in HTML files
if (typeof window !== 'undefined') {
    window.Components = {
        createNavigation,
        createParticleSystem,
        createFooter,
        createNewsletterSignup,
        createBreadcrumb,
        createBookCard,
        createNewsPostCard,
        populateNavigationDropdowns,
        initializeSharedComponents
    };
}

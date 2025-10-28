// ============================================
// PARTICLE SYSTEM (OPTIMIZED)
// ============================================

const moteColors = [
    'rgba(78, 205, 196, 0.8)',
    'rgba(255, 140, 66, 0.7)',
    'rgba(78, 205, 196, 0.6)',
    'rgba(255, 215, 0, 0.75)',
    'rgba(100, 220, 210, 0.7)',
    'rgba(255, 140, 66, 0.5)',
    'rgba(78, 205, 196, 0.5)',
    'rgba(255, 180, 100, 0.65)',
    'rgba(60, 180, 175, 0.8)',
    'rgba(255, 215, 0, 0.6)',
    'rgba(100, 220, 210, 0.5)',
    'rgba(255, 140, 66, 0.8)',
];

const particleContainer = document.getElementById('particles');
const particleLayers = document.querySelectorAll('.particle-layer');
let moteIndex = 0;
let moteCounter = 0;
let capMoteCount = 0;

// Keyframe cache to avoid creating duplicate animations
const keyframeCache = new Map();

function syncParticleLayerHeights() {
    const docHeight = document.documentElement.scrollHeight;
    particleLayers.forEach(layer => {
        layer.style.height = docHeight + 'px';
    });
}

function calculateCapMoteCount() {
    const pixelsPerMote = 800 * 800; // Increased for better performance
    const pageArea = document.documentElement.scrollWidth * document.documentElement.scrollHeight;
    const motePerLayer = Math.floor(pageArea / pixelsPerMote);
    capMoteCount = motePerLayer * particleLayers.length;
    return capMoteCount;
}

function createRandomDrift(index) {
    const keyframeName = `drift${index}`;

    // Check if we already created this animation
    if (keyframeCache.has(keyframeName)) {
        return keyframeName;
    }

    const keyframes = `
        @keyframes ${keyframeName} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40 - 20}px); }
            50% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40 - 20}px); }
            75% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 40 - 20}px); }
            100% { transform: translate(0, 0); }
        }
    `;

    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    keyframeCache.set(keyframeName, style);

    return keyframeName;
}

function createMote(layer, layerIndex) {
    const mote = document.createElement('div');
    mote.className = 'mote';

    const minSize = 3 + (10 / layerIndex);
    const maxSize = 8 + (20 / layerIndex);
    const size = minSize + Math.random() * (maxSize - minSize);
    const color = moteColors[Math.floor(Math.random() * moteColors.length)];
    const driftAnimation = createRandomDrift(moteIndex++);
    const duration = 40 + Math.random() * 30;
    const fadeInDuration = 2;
    const fadeOutDuration = 3;
    const fadeOutStart = duration - fadeOutDuration;

    mote.style.width = size + 'px';
    mote.style.height = size + 'px';
    mote.style.background = color;
    mote.style.position = 'absolute';

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * document.documentElement.scrollHeight;

    mote.style.left = x + 'px';
    mote.style.top = y + 'px';

    const fadeKeyframeName = `fade-${moteIndex}`;
    const fadeKeyframes = `
        @keyframes ${fadeKeyframeName} {
            0% { opacity: 0; }
            ${(fadeInDuration / duration) * 100}% { opacity: 1; }
            ${(fadeOutStart / duration) * 100}% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    const fadeStyle = document.createElement('style');
    fadeStyle.textContent = fadeKeyframes;
    document.head.appendChild(fadeStyle);

    mote.style.animation = `${driftAnimation} ${duration}s ease-in-out, ${fadeKeyframeName} ${duration}s ease-in-out`;
    mote.style.animationIterationCount = '1';
    mote.style.animationFillMode = 'forwards';

    layer.appendChild(mote);
    moteCounter++;

    setTimeout(() => {
        if (mote.parentNode) {
            mote.remove();
            moteCounter--;
        }
        // Clean up fade keyframe
        fadeStyle.remove();
    }, duration * 1000 + 100);
}

function updateParallax() {
    const scrollPos = window.pageYOffset;
    particleLayers.forEach(layer => {
        const speed = parseFloat(layer.dataset.speed) || 0.5;
        layer.style.transform = `translateY(${scrollPos * speed}px)`;
    });
}

calculateCapMoteCount();
syncParticleLayerHeights();

particleLayers.forEach((layer, layerIndex) => {
    const initialMotes = 2;
    for (let i = 0; i < initialMotes; i++) {
        createMote(layer, layerIndex);
    }
});

// Increased interval from 3ms to 15ms for better performance
setInterval(() => {
    if (moteCounter < calculateCapMoteCount()) {
        let randomLayerIndex = Math.floor(Math.random() * particleLayers.length);
        createMote(particleLayers[randomLayerIndex], randomLayerIndex);
    }
}, 15);

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', () => {
    calculateCapMoteCount();
    syncParticleLayerHeights();
});
window.addEventListener('load', () => {
    setTimeout(syncParticleLayerHeights, 500);
});

// ============================================
// BOOK CAROUSEL WITH ENHANCED DATA
// ============================================

const booksData = [
    {
        id: 1,
        title: "The Day When Servants Reign",
        series: "Severance Chronicles",
        seriesNumber: "Book 1 of 4",

        currentStage: "Drafting",
        stageProgress: 31,
        wordCount: 56000,
        targetWordCount: 200000,
        published: false,
        releaseEstimate: "Late 2026",
        readTime: "~650 pages",

        genre: "Epic Fantasy",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult & Young Adult",
        setting: "A Mesoamerican-Roman Empire",

        synopsis: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty — against each other, empires, and gods.",
        status: "Drafting",
        contentWarnings: ["Violence","Veganism"],
        contentWarningsDesc: ["Describes visceral scenes of bloodshed and war. Some examples include describing corpses, death, and the aftermath of battles.","Descriptions of people who don't eat meat or even animal products, such as eggs or honey."],
        characters: [
            { name: "Rennir", role: "Protagonist", desc: "A bastard slave" },
            { name: "Tad", role: "Ally", desc: "Rennir's ambitious friend" },
            { name: "Armund", role: "Main Character", desc: "A spoiled prince" }
        ],
        sampleChapter: "With his boot, Acradumin nudged one of the hundreds of corpses that lay strewn across the hot savanna. The body barely moved at the prodding. A dozen flies leapt off the man, taking to the air, joining what was easily thousands of others...."
    }
];

let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const indicatorsContainer = document.getElementById('indicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderBooks() {
    track.innerHTML = booksData.map((book) => {
        // Calculate progress for THIS book
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

        return `
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
                            <span class="book-badge">${book.series}</span>
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
                                    stepClass = 'completed';
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
                            <span class="meta-value">${book.genre}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Audience</span>
                            <span class="meta-value status">${book.targetAudience}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Point of View</span>
                            <span class="meta-value status">${book.povStyle}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Setting</span>
                            <span class="meta-value">${book.setting}</span>
                        </div>
                    </div>

                    ${book.contentWarnings.length > 0 ? `
                    <div class="content-warnings">
                        <div class="warnings-label">⚠ Content Notes</div>
                        <div class="warnings-list">
                            ${book.contentWarnings.map((w, i) =>
                            `<div class="warning-tag">
                                ${w}*
                                <span class="tooltip">
                                    *${book.contentWarningsDesc[i]}
                                </span>
                            </div>`).join('')}
                        </div>
                        <p style="font-size: 12px; color: #FF8a8a8a; font-style: italic">* Hover for more detail</p>
                    </div>
                    ` : ''}

                    ${book.characters.length > 0 ? `
                    <div class="characters-section">
                        <div class="characters-label">Key Characters</div>
                        <div class="characters-grid">
                            ${book.characters.map(char => `
                            <div class="character-card">
                                <div class="character-name">${char.name}</div>
                                <div class="character-role">${char.role}</div>
                                <div class="character-desc">${char.desc}</div>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${book.sampleChapter ? `
                    <div class="sample-chapter">
                        <h4>Opening Lines</h4>
                        <div class="sample-text">"${book.sampleChapter}"</div>
                        <button class="btn btn-secondary">Read Full Sample</button>
                    </div>
                    ` : ''}

                    <div class="book-actions">
                        <a href="#newsletter" class="btn">Get Updates</a>
                        <button class="btn btn-secondary">Wishlist</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderIndicators() {
    indicatorsContainer.innerHTML = booksData.map((_, idx) => `
        <div class="indicator ${idx === currentIndex ? 'active' : ''}" data-index="${idx}"></div>
    `).join('');

    document.querySelectorAll('.indicator').forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.dataset.index);
            updateCarousel();
        });
    });
}

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.querySelectorAll('.indicator').forEach((ind, idx) => {
        ind.classList.toggle('active', idx === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === booksData.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < booksData.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    } else if (e.key === 'ArrowRight' && currentIndex < booksData.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Initialize
renderBooks();
renderIndicators();
updateCarousel();

// ============================================
// NEWS/UPDATES SECTION
// ============================================

const newsPosts = [
    {
        category: 'progress',
        date: 'January 15, 2025',
        title: 'Servants of the Dying Sun - Drafting Progress Update',
        excerpt: 'Excited to share that the first draft of Servants of the Dying Sun has reached 45,000 words! Rennir\'s journey through the imperial palace is taking shape, and the political intrigue is intensifying. The magic system is proving to be more complex than I originally planned...',
        link: '#',
        highlight: true
    },
    {
        category: 'event',
        date: 'January 10, 2025',
        title: 'Virtual Author Q&A - February 2025',
        excerpt: 'Join me for a live Q&A session on February 14th at 7 PM EST! We\'ll discuss worldbuilding, character development, and I\'ll share exclusive details about upcoming projects. Plus, I\'ll be answering your burning questions about the Servants series.',
        link: '#',
        highlight: false
    },
    {
        category: 'behind-scenes',
        date: 'January 5, 2025',
        title: 'Crafting the Magic System',
        excerpt: 'Ever wondered how I design magic systems? In this post, I break down my process for creating the unique power dynamics in Servants of the Dying Sun. From initial concepts to balancing narrative needs with logical consistency...',
        link: '#',
        highlight: false
    },
    {
        category: 'spotlight',
        date: 'December 28, 2024',
        title: 'Reader Spotlight: Fan Art Feature',
        excerpt: 'This month\'s reader spotlight showcases incredible fan art from the community! Check out these amazing interpretations of characters and scenes from my books. The creativity of readers never ceases to amaze me.',
        link: '#',
        highlight: false
    },
    {
        category: 'progress',
        date: 'December 20, 2024',
        title: 'The Fall of the Exalted - Revisions Complete',
        excerpt: 'I\'m thrilled to announce that revisions for The Fall of the Exalted are now complete! The manuscript is with beta readers, and I\'m incorporating their feedback. Expected release is still on track for Summer 2025.',
        link: '#',
        highlight: false
    },
    {
        category: 'behind-scenes',
        date: 'December 15, 2024',
        title: 'Building Believable Fantasy Worlds',
        excerpt: 'Worldbuilding is one of my favorite parts of writing fantasy. In this post, I share my approach to creating immersive worlds that feel lived-in and authentic, including cultural details, economics, and social structures...',
        link: '#',
        highlight: false
    },
    {
        category: 'event',
        date: 'December 1, 2024',
        title: 'Book Signing Tour Announced',
        excerpt: 'Exciting news! I\'ll be embarking on a book signing tour in Spring 2025, visiting cities across the country. More details and locations coming soon. Sign up for the newsletter to be the first to know when I\'m coming to your city!',
        link: '#',
        highlight: true
    },
    {
        category: 'spotlight',
        date: 'November 25, 2024',
        title: 'Community Theories: What Readers Are Predicting',
        excerpt: 'The community has been buzzing with theories about what\'s coming next in the series. Some of you are scarily close to the truth! In this post, I react to your wildest predictions (no spoilers, I promise).',
        link: '#',
        highlight: false
    }
];

const newsGrid = document.getElementById('newsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const newsPrevBtn = document.getElementById('newsPrevBtn');
const newsNextBtn = document.getElementById('newsNextBtn');

let currentFilter = 'all';
let currentPage = 0;
const MAX_SLOTS = 6; // Maximum grid slots to fill (highlights = 2 slots, regular = 1 slot)

function getFilteredPosts(filter = 'all') {
    return filter === 'all'
        ? newsPosts
        : newsPosts.filter(post => post.category === filter);
}

// Calculate how many slots a list of posts takes up
function calculateSlots(posts) {
    return posts.reduce((total, post) => total + (post.highlight ? 2 : 1), 0);
}

// Get posts for a specific page, filling up to MAX_SLOTS
function getPostsForPage(posts, pageNum) {
    let postIndex = 0;

    // Skip posts from previous pages
    for (let p = 0; p < pageNum; p++) {
        let pageSlots = 0;
        let pageStartIndex = postIndex;

        while (postIndex < posts.length) {
            const post = posts[postIndex];
            const postSlots = post.highlight ? 2 : 1;

            // Check if adding this post would exceed MAX_SLOTS
            if (pageSlots + postSlots <= MAX_SLOTS) {
                pageSlots += postSlots;
                postIndex++;
            } else {
                // Can't fit this post, move to next page
                break;
            }
        }

        // If we didn't move forward, skip at least one post to avoid infinite loop
        if (postIndex === pageStartIndex && postIndex < posts.length) {
            postIndex++;
        }
    }

    // Get posts for current page
    const postsForPage = [];
    let currentSlots = 0;

    while (postIndex < posts.length) {
        const post = posts[postIndex];
        const postSlots = post.highlight ? 2 : 1;

        // Check if adding this post would exceed MAX_SLOTS
        if (currentSlots + postSlots <= MAX_SLOTS) {
            postsForPage.push(post);
            currentSlots += postSlots;
            postIndex++;
        } else {
            // Can't fit this post on current page
            break;
        }
    }

    return postsForPage;
}

// Calculate total number of pages
function getTotalPages(posts) {
    let pages = 0;
    let postIndex = 0;

    while (postIndex < posts.length) {
        let pageSlots = 0;
        let pageStartIndex = postIndex;

        while (postIndex < posts.length) {
            const post = posts[postIndex];
            const postSlots = post.highlight ? 2 : 1;

            // Check if adding this post would exceed MAX_SLOTS
            if (pageSlots + postSlots <= MAX_SLOTS) {
                pageSlots += postSlots;
                postIndex++;
            } else {
                // Can't fit this post, move to next page
                break;
            }
        }

        // If we didn't move forward, skip at least one post to avoid infinite loop
        if (postIndex === pageStartIndex && postIndex < posts.length) {
            postIndex++;
        }

        pages++;
    }

    return pages;
}

function renderNewsPosts(filter = 'all', page = 0) {
    const filteredPosts = getFilteredPosts(filter);

    // Get posts for current page (up to 6 slots)
    const postsToShow = getPostsForPage(filteredPosts, page);

    newsGrid.innerHTML = postsToShow.map(post => `
        <article class="news-post${post.highlight ? ' highlight' : ''}" data-category="${post.category}">
            <span class="post-category ${post.category}">${post.category.replace('-', ' ')}</span>
            <div class="post-date">${post.date}</div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="${post.link}" class="post-link">
                Read More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </article>
    `).join('');

    updateCarouselButtons(filteredPosts);
}

function updateCarouselButtons(filteredPosts) {
    const totalPages = getTotalPages(filteredPosts);

    // Disable/enable buttons based on current page
    newsPrevBtn.disabled = currentPage === 0;
    newsNextBtn.disabled = currentPage >= totalPages - 1;
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Reset to first page
        currentPage = 0;

        // Filter posts
        const category = btn.dataset.category;
        currentFilter = category;
        renderNewsPosts(category, currentPage);
    });
});

// Carousel navigation
newsPrevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderNewsPosts(currentFilter, currentPage);
    }
});

newsNextBtn.addEventListener('click', () => {
    const filteredPosts = getFilteredPosts(currentFilter);
    const totalPages = getTotalPages(filteredPosts);

    if (currentPage < totalPages - 1) {
        currentPage++;
        renderNewsPosts(currentFilter, currentPage);
    }
});

// Initialize news section
renderNewsPosts();

// ============================================
// MOBILE NAVIGATION MENU
// ============================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navButtons = document.querySelectorAll('.nav-btn');

// Toggle mobile menu
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close menu when clicking a nav link
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) &&
        !mobileMenuToggle.contains(e.target) &&
        navLinks.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

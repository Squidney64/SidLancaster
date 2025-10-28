// ============================================
// CENTRALIZED DATA FOR MULTI-PAGE SITE
// ============================================

// SERIES DATA
const seriesData = {
    'severance-chronicles': {
        id: 'severance-chronicles',
        name: 'Severance Chronicles',
        slug: 'severance-chronicles',
        tagline: 'In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty',
        bookCount: 1,
        plannedBooks: 4,
        publishedBooks: 0,
        status: 'Active',
        genre: 'Epic Fantasy',

        description: 'The Severance Chronicles follows the intertwined fates of servants, slaves, and outcasts in a world where a dying sun threatens all existence. As empires crumble and gods awaken, those deemed powerless must rise to challenge the very foundations of their world. Set in a unique fantasy world inspired by Mesoamerican and Roman cultures, each book explores themes of power, freedom, and destiny through different perspectives as characters navigate political intrigue, ancient magic, and cosmic threats.',

        themes: [
            'Power and Servitude',
            'Freedom and Destiny',
            'Empire and Rebellion',
            'Ancient Magic and Forgotten Gods',
            'Cosmic Horror',
            'Found Family and Betrayal'
        ],

        worldBuilding: 'A vast Mesoamerican-Roman inspired empire exists beneath a dying sun that waxes and wanes unpredictably. Ancient pyramids dot the landscape alongside Roman-style architecture. The world is divided into rigid social castes, with servants and slaves forming the foundation of society. As the sun dims, ancient powers and forgotten gods begin to stir, threatening to upend the established order.',

        worldSetting: 'A Mesoamerican-Roman inspired empire beneath a dying sun',

        contentWarnings: [
            'Violence and war',
            'Slavery and systemic oppression',
            'Death and loss',
            'Political intrigue and manipulation'
        ],

        readingOrder: 'chronological',

        books: ['the-day-when-servants-reign'], // Will expand as more books are added

        featuredArt: null, // Placeholder for series banner/art
        worldMap: null, // Placeholder for world map

        commonCharacters: [
            'Various POV characters across books',
            'Interconnected storylines'
        ],

        magicSystem: 'Ancient powers tied to the dying sun and forgotten gods. Magic is rare and dangerous, often requiring great sacrifice. Those who wield it are feared and revered in equal measure.',

        resources: {
            discussionForum: '#',
            bookClub: '#',
            fanArt: '#'
        }
    }
};

// BOOKS DATA
const booksData = {
    'the-day-when-servants-reign': {
        id: 1,
        slug: 'the-day-when-servants-reign',
        title: "The Day When Servants Reign",
        series: "severance-chronicles",
        seriesName: "Severance Chronicles",
        seriesNumber: "Book 1 of 4",

        // Publication Info
        currentStage: "Drafting",
        stageProgress: 31,
        wordCount: 56000,
        targetWordCount: 200000,
        published: false,
        releaseEstimate: "Late 2026",
        estimatedPages: 650,

        // Book Details
        genre: ["Epic Fantasy", "Political Fantasy", "Dark Fantasy"],
        subgenres: ["Political Fantasy", "Dark Fantasy", "Low Fantasy"],
        pov: "Multiple Viewpoints - 3rd Person Limited",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult & Young Adult",
        setting: "A Mesoamerican-Roman Empire",
        status: "Drafting",

        // Marketing
        tagline: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty — against each other, empires, and gods.",

        synopsis: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty — against each other, empires, and gods.",

        extendedSynopsis: "Rennir, a bastard slave in the imperial palace, has always known his place at the bottom of society. But when the dying sun threatens to plunge the world into eternal darkness, ancient powers begin to stir, and those born to serve find themselves at the center of a cosmic struggle. Alongside his ambitious friend Tad and the spoiled prince Armund, Rennir must navigate deadly palace intrigue, awakening magic, and the machinations of gods thought long dead. As empires crumble and the old order falls, the servants of the world face a choice: accept their fate, or seize the sovereignty that has been denied them for generations.",

        themes: [
            "Rising from servitude",
            "Friendship and betrayal",
            "The cost of power",
            "Challenging destiny",
            "Empire in decline"
        ],

        // Content
        contentWarnings: ["Violence", "Veganism"],
        contentWarningsDesc: [
            "Describes visceral scenes of bloodshed and war. Some examples include describing corpses, death, and the aftermath of battles.",
            "Descriptions of people who don't eat meat or even animal products, such as eggs or honey."
        ],

        detailedContentWarnings: {
            violence: {
                level: "Moderate to High",
                description: "Contains graphic descriptions of battle scenes, death, and violence. War and its aftermath are central themes.",
                spoilerFree: true
            },
            dietaryChoices: {
                level: "Mentioned",
                description: "Some characters practice veganism as part of their cultural or personal beliefs. This is portrayed neutrally.",
                spoilerFree: true
            }
        },

        // Characters
        characters: [
            {
                name: "Rennir",
                role: "Protagonist",
                description: "A bastard slave",
                extendedDescription: "Born into servitude at the imperial palace, Rennir has survived by keeping his head down and his ambitions hidden. But beneath his quiet exterior lies a sharp mind and a growing hunger for something more than the life prescribed for him.",
                arc: "From survival to sovereignty",
                spoilerLevel: "safe"
            },
            {
                name: "Tad",
                role: "Deuteragonist",
                description: "Rennir's ambitious friend",
                extendedDescription: "Where Rennir is cautious, Tad is bold. His ambition burns bright, and he sees opportunities where others see only danger. His friendship with Rennir is tested as they both reach for power.",
                arc: "Ambition's price",
                spoilerLevel: "safe"
            },
            {
                name: "Armund",
                role: "Main Character",
                description: "A spoiled prince",
                extendedDescription: "Raised in privilege and luxury, Prince Armund has never had to question his place in the world. As events force him out of his gilded cage, he must confront what it means to truly lead.",
                arc: "From privilege to purpose",
                spoilerLevel: "safe"
            }
        ],

        // Sample Content
        sampleChapter: "With his boot, Acradumin nudged one of the hundreds of corpses that lay strewn across the hot savanna. The body barely moved at the prodding. A dozen flies leapt off the man, taking to the air, joining what was easily thousands of others....",

        fullSampleChapter: `With his boot, Acradumin nudged one of the hundreds of corpses that lay strewn across the hot savanna. The body barely moved at the prodding. A dozen flies leapt off the man, taking to the air, joining what was easily thousands of others....

[Extended sample chapter content would go here - this is a placeholder for the full first chapter or substantial excerpt]`,

        // Extras
        extras: {
            playlist: null, // Spotify/Apple Music playlist link
            pinterest: null, // Pinterest board
            inspiration: [],
            moodBoard: null,
            characterArt: [],
            maps: [],
            deletedScenes: []
        },

        // Purchase Links (for when published)
        purchaseLinks: {
            amazon: '#',
            barnesNoble: '#',
            bookshop: '#', // Indie bookstore
            goodreads: '#',
            storyGraph: '#'
        },

        // Reviews (for when published)
        reviews: [],
        averageRating: null,

        // Related
        relatedBooks: [], // Other books readers might like

        // Metadata
        isbn: null,
        publisher: 'Self-Published',
        language: 'English',

        // Status
        status: "Drafting",
        lastUpdated: "2025-01-15"
    }
};

// NEWS/UPDATES DATA
const newsData = [
    {
        id: 'progress-update-jan-2025',
        slug: 'progress-update-jan-2025',
        category: 'progress',
        title: 'Servants of the Dying Sun - Drafting Progress Update',
        date: '2025-01-15',
        dateFormatted: 'January 15, 2025',
        excerpt: 'Excited to share that the first draft of Servants of the Dying Sun has reached 45,000 words! Rennir\'s journey through the imperial palace is taking shape, and the political intrigue is intensifying. The magic system is proving to be more complex than I originally planned...',
        content: `Full article content would go here...`,
        tags: ['severance-chronicles', 'the-day-when-servants-reign', 'writing-progress'],
        featured: true,
        highlight: true,
        readingTime: 3,
        image: null
    },
    {
        id: 'virtual-qa-feb-2025',
        slug: 'virtual-qa-feb-2025',
        category: 'event',
        title: 'Virtual Author Q&A - February 2025',
        date: '2025-01-10',
        dateFormatted: 'January 10, 2025',
        excerpt: 'Join me for a live Q&A session on February 14th at 7 PM EST! We\'ll discuss worldbuilding, character development, and I\'ll share exclusive details about upcoming projects. Plus, I\'ll be answering your burning questions about the Servants series.',
        content: `Full article content would go here...`,
        tags: ['events', 'community'],
        featured: false,
        highlight: false,
        readingTime: 2,
        image: null
    },
    {
        id: 'crafting-magic-system',
        slug: 'crafting-magic-system',
        category: 'behind-scenes',
        title: 'Crafting the Magic System',
        date: '2025-01-05',
        dateFormatted: 'January 5, 2025',
        excerpt: 'Ever wondered how I design magic systems? In this post, I break down my process for creating the unique power dynamics in Servants of the Dying Sun. From initial concepts to balancing narrative needs with logical consistency...',
        content: `Full article content would go here...`,
        tags: ['severance-chronicles', 'worldbuilding', 'craft'],
        featured: false,
        highlight: false,
        readingTime: 5,
        image: null
    },
    {
        id: 'fan-art-spotlight-dec-2024',
        slug: 'fan-art-spotlight-dec-2024',
        category: 'spotlight',
        title: 'Reader Spotlight: Fan Art Feature',
        date: '2024-12-28',
        dateFormatted: 'December 28, 2024',
        excerpt: 'This month\'s reader spotlight showcases incredible fan art from the community! Check out these amazing interpretations of characters and scenes from my books. The creativity of readers never ceases to amaze me.',
        content: `Full article content would go here...`,
        tags: ['community', 'fan-art'],
        featured: false,
        highlight: false,
        readingTime: 2,
        image: null
    },
    {
        id: 'fall-exalted-revisions-complete',
        slug: 'fall-exalted-revisions-complete',
        category: 'progress',
        title: 'The Fall of the Exalted - Revisions Complete',
        date: '2024-12-20',
        dateFormatted: 'December 20, 2024',
        excerpt: 'I\'m thrilled to announce that revisions for The Fall of the Exalted are now complete! The manuscript is with beta readers, and I\'m incorporating their feedback. Expected release is still on track for Summer 2025.',
        content: `Full article content would go here...`,
        tags: ['writing-progress'],
        featured: false,
        highlight: false,
        readingTime: 3,
        image: null
    },
    {
        id: 'building-believable-worlds',
        slug: 'building-believable-worlds',
        category: 'behind-scenes',
        title: 'Building Believable Fantasy Worlds',
        date: '2024-12-15',
        dateFormatted: 'December 15, 2024',
        excerpt: 'Worldbuilding is one of my favorite parts of writing fantasy. In this post, I share my approach to creating immersive worlds that feel lived-in and authentic, including cultural details, economics, and social structures...',
        content: `Full article content would go here...`,
        tags: ['worldbuilding', 'craft'],
        featured: false,
        highlight: false,
        readingTime: 6,
        image: null
    },
    {
        id: 'book-signing-tour-announcement',
        slug: 'book-signing-tour-announcement',
        category: 'event',
        title: 'Book Signing Tour Announced',
        date: '2024-12-01',
        dateFormatted: 'December 1, 2024',
        excerpt: 'Exciting news! I\'ll be embarking on a book signing tour in Spring 2025, visiting cities across the country. More details and locations coming soon. Sign up for the newsletter to be the first to know when I\'m coming to your city!',
        content: `Full article content would go here...`,
        tags: ['events', 'tour'],
        featured: false,
        highlight: true,
        readingTime: 2,
        image: null
    },
    {
        id: 'community-theories',
        slug: 'community-theories',
        category: 'spotlight',
        title: 'Community Theories: What Readers Are Predicting',
        date: '2024-11-25',
        dateFormatted: 'November 25, 2024',
        excerpt: 'The community has been buzzing with theories about what\'s coming next in the series. Some of you are scarily close to the truth! In this post, I react to your wildest predictions (no spoilers, I promise).',
        content: `Full article content would go here...`,
        tags: ['community', 'severance-chronicles'],
        featured: false,
        highlight: false,
        readingTime: 4,
        image: null
    }
];

// Helper functions to access data
const getBookBySlug = (slug) => booksData[slug];
const getSeriesBySlug = (slug) => seriesData[slug];
const getNewsBySlug = (slug) => newsData.find(post => post.slug === slug);
const getNewsById = (id) => newsData.find(post => post.id === id);
const getNewsByCategory = (category) => category === 'all' ? newsData : newsData.filter(post => post.category === category);
const getNewsByTag = (tag) => newsData.filter(post => post.tags.includes(tag));
const getFeaturedNews = () => newsData.filter(post => post.featured);
const getLatestNews = (count = 3) => newsData.slice(0, count);
const getBooksInSeries = (seriesSlug) => {
    const series = seriesData[seriesSlug];
    if (!series) return [];
    return series.books.map(bookSlug => booksData[bookSlug]).filter(Boolean);
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        seriesData,
        booksData,
        newsData,
        getBookBySlug,
        getSeriesBySlug,
        getNewsBySlug,
        getNewsById,
        getNewsByCategory,
        getNewsByTag,
        getFeaturedNews,
        getLatestNews,
        getBooksInSeries
    };
}

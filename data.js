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
        mainCharacters: [
            {
                name: "Rennir",
                role: "Protagonist • Palace Slave",
                description: "Born into servitude at the imperial palace, Rennir has survived by keeping his head down and his ambitions hidden. But beneath his quiet exterior lies a sharp mind and a growing hunger for something more than the life prescribed for him. When ancient powers begin to stir and the sun itself threatens to die, Rennir finds himself at the center of events that will reshape the world.",
                traits: ["Clever", "Cautious", "Observant", "Hidden Ambition"]
            },
            {
                name: "Tad",
                role: "Deuteragonist • Ambitious Servant",
                description: "Where Rennir is cautious, Tad is bold. His ambition burns bright, and he sees opportunities where others see only danger. Tad's hunger for power and status drives him forward, but his friendship with Rennir is tested as they both reach for sovereignty. His charisma and cunning make him both an invaluable ally and a potential threat.",
                traits: ["Ambitious", "Charismatic", "Bold", "Calculating"]
            },
            {
                name: "Prince Armund",
                role: "Main Character • Imperial Prince",
                description: "Raised in privilege and luxury, Prince Armund has never had to question his place in the world. Spoiled and sheltered within the palace walls, he views the servants as little more than furniture. But as cosmic forces threaten the empire and events force him out of his gilded cage, Armund must confront what it means to truly lead—and whether he has the strength to do so.",
                traits: ["Privileged", "Naive", "Growing", "Conflicted"]
            },
            {
                name: "Lysara",
                role: "Supporting Character • Temple Priestess",
                description: "A priestess of the old gods, Lysara walks the line between the mortal world and the divine. She carries knowledge of ancient prophecies and forgotten magic, knowledge that makes her both valuable and dangerous. Her visions of the dying sun have driven her to desperate action, seeking out those who might prevent the coming darkness.",
                traits: ["Mystical", "Determined", "Secretive", "Burdened"]
            }
        ],

        // Sample Content
        sampleChapter: [
            "The sun was dying again.",
            "Rennir had seen it happen three times in his short life—watched the great golden orb in the sky dim and shrink until it was nothing more than a pale disk barely bright enough to cast shadows. The priests said it was the will of the gods, that the sun waxed and waned according to divine purpose. The slaves whispered different stories in the dark corners of the palace, tales of ancient curses and forgotten sins.",
            "He didn't much care which was true. Dead gods or living ones, the result was the same: when the sun dimmed, people died. Crops failed. Empires crumbled. And servants like him learned to keep their heads down and survive.",
            "The imperial palace of Tlacatlan stretched before him, a massive stone edifice that seemed to grow from the earth itself. Stepped pyramids rose on either side of the central structure, their surfaces adorned with carvings of gods and emperors. At this hour, with the sun just beginning its descent, the entire complex glowed amber and gold.",
            "Beautiful, if you ignored the blood in the stones.",
            "\"Rennir!\" Tad's voice cut through his thoughts, sharp with urgency. \"You're going to get us both whipped if you keep daydreaming. The High Chamberlain wants the prince's chambers prepared before sunset.\"",
            "Rennir turned to find his friend striding toward him, arms loaded with fresh linens. Tad was everything Rennir was not—tall where Rennir was average, bold where Rennir was cautious, handsome where Rennir was merely... plain. It was a wonder they were friends at all, really.",
            "\"The sun's not even halfway down,\" Rennir said, but he quickened his pace anyway. \"We have time.\"",
            "\"You always say that. Right up until we don't.\" Tad fell into step beside him, lowering his voice. \"Did you hear? Prince Armund threw another fit this morning. Sent three servants to the stocks because his breakfast was too cold.\"",
            "\"His breakfast is always too cold. The kitchens are half the palace away from his chambers.\"",
            "\"Try telling him that.\" Tad's expression darkened. \"One of these days, someone's going to snap. Put a knife in that spoiled princeling's ribs and be done with it.\"",
            "\"Keep your voice down,\" Rennir hissed, glancing around. The corridor was empty, but in the palace, walls had ears. \"Talk like that gets you worse than the stocks.\"",
            "\"Talk like that is all we have.\" But Tad did lower his voice. \"Unless you plan to do something about it.\"",
            "The question hung between them like smoke. It wasn't the first time Tad had hinted at... something. Change. Action. Words that could mean anything from petty theft to outright rebellion.",
            "Rennir said nothing. In the palace, silence was survival."
        ],

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
        lastUpdated: "2025-01-15",

        // Progress Timeline Details
        progressMilestones: {
            'Prewriting': {
                completed: true,
                date: '2024-08',
                description: 'Completed world-building, character arcs, and detailed outline. Researched Mesoamerican and Roman cultures to create an authentic blend.',
                notes: 'The magic system went through three iterations before finding the right balance of mystery and power.'
            },
            'Drafting': {
                completed: false,
                startDate: '2024-09',
                description: 'Currently writing the first draft. Focusing on getting the story down without worrying about perfection.',
                notes: 'The palace intrigue sections are coming together beautifully. Rennir and Tad\'s dynamic is stronger than I expected.',
                currentFocus: 'Act 2 - Palace conspiracy and the first manifestation of ancient powers'
            },
            'Revising': {
                completed: false,
                description: 'Major structural changes, plot holes fixed, character arcs refined.',
                estimatedStart: '2025-06'
            },
            'Editing': {
                completed: false,
                description: 'Line editing, prose polishing, consistency checks.',
                estimatedStart: '2025-10'
            },
            'Publishing': {
                completed: false,
                description: 'Cover design, formatting, marketing preparation, ARC distribution.',
                estimatedStart: '2026-03'
            },
            'Published': {
                completed: false,
                description: 'Book release and promotion.',
                estimatedDate: 'Late 2026'
            }
        }
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

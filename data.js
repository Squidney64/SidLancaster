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
        },

        // Page Customization
        backgroundImage: "Immaria.png"
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
        releaseEstimate: "Early 2027",
        estimatedPages: 650,

        // Book Details
        genre: ["Epic Fantasy"],
        subgenres: ["Political Fantasy", "Dark Fantasy"],
        pov: "Multiple Viewpoints - 3rd Person Limited",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult & Young Adult",
        setting: "A Mesoamerican-Roman Empire",
        status: "Drafting",

        // Marketing
        tagline: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty — against each other, empires, and gods.",

        synopsis: "Rennir, a bastard slave in a vast empire, has always known his place at the bottom of society. But when his way of life is threatened and ancient powers begin to stir he finds himself at the center of a storm of political intruige, rebellion, and war. Alongside his ambitious friend Tad and the spoiled prince Armund, Rennir must navigate a fracturing empire, a crusading theocracy, and the schemes of gods. As empires crumble and the old order falls, the servants of the world face a choice: accept their fate, or seize the sovereignty that has been denied them for generations.",

        extendedSynopsis: "Rennir, a bastard slave in a vast empire, has always known his place at the bottom of society. But when his way of life is threatened and ancient powers begin to stir he finds himself at the center of a storm of political intruige, rebellion, and war. Alongside his ambitious friend Tad and the spoiled prince Armund, Rennir must navigate a fracturing empire, a crusading theocracy, and the schemes of gods. As empires crumble and the old order falls, the servants of the world face a choice: accept their fate, or seize the sovereignty that has been denied them for generations.",

        themes: [
            "Sovereignty",
            "Friendship and Betrayal",
            "The Cost of Power",
            "The Problem of Evil",
            "Empire in Decline"
        ],

        // Content
        contentWarnings: ["Violence"],
        contentWarningsDesc: [
            "Describes visceral scenes of bloodshed and war. Some examples include describing corpses, death, and the aftermath of battles."
        ],

        detailedContentWarnings: {
            violence: {
                level: "Moderate to High",
                description: "Contains graphic descriptions of battle scenes, death, and violence. War and its aftermath are central themes.",
                spoilerFree: true
            }
        },

        // Characters
        mainCharacters: [
            {
                name: "Ta'el Rennir",
                role: "Protagonist • Bastard Slave",
                description: "Born into servitude in a cavern town, Rennir always survived by keeping his head down, avoiding attention. But, when dozens of slaves are drafted for a foreign war, Rennir finds himself forced out of his comfort zone and into a fight for sovereignty.",
                traits: ["Clever", "Cautious", "Observant"]
            },
            {
                name: "Finil Tad",
                role: "Deuteragonist • Ambitious Servant",
                description: "Where Rennir is cautious, Tad is bold. Always looking for an edge, Tad's ambition and idealism leads him and his followers to action and revolution. Tad is driven by a love for his people and a hatred for those who oppress them, to a fault.",
                traits: ["Ambitious", "Charismatic", "Bold", "Calculating"]
            },
            {
                name: "Prince Armund Rassfold",
                role: "Main Character • Imperial Prince",
                description: "Raised in privilege and luxury, Prince Armund",
                traits: ["Privileged", "Naive", "Growing", "Conflicted"]
            }
        ],

        // Sample Content
        sampleChapterHeading: "Prologue - Lecidesha",
        sampleChapter: [
            `With his boot, Acradumin nudged one of the hundreds of corpses that lay strewn across the hot savanna. The body barely moved at the prodding. A dozen flies leapt off the man, taking to the air, joining what was easily thousands of others. Circling above the carnage, hundreds of carrion birds flocked, fattening themselves on the fallen men.

            <p>The gibbous sun glared down angrily. The air danced with the heat. Already setting in, the stench of the battle’s aftermath hung thick in the air like a curtain, mixing with the haze of dust and smoke. Blood, sweat, urine, and decay. The odor of war.</p>

            <p>The Lecideshi savanna was not like Acradumin remembered. Over the past hundred years, and even in the past five years, the landscape transformed drastically. Countless roughly hewn stumps slumped where healthy acacias and royal baobab trees once towered, salvaged for campfires and siege weapons. Without them the landscape seemed empty. Herds of buffalo and wild rusen were slaughtered to feed armies. No longer did the trumpets of elephants or the melodies of songbirds season the prairie with their music. They were replaced by the groans and screams of dying men and the celebratory cries of the carrion birds, flies, and hyenas who had come for the feast.</p>

            <p>It seemed like the only thing that remained unchanged were the towering sandstone karsts, smoothed by centuries of wind. The pillars jutted out of the ground around the valley like the fingers of fallen gods, reaching up into the sky, where the islands of Acrad’immar drifted, as though unbothered by the devastation happening below.</p>

            <p>The city of Lecidesha sprawled proudly on the bank of the Lethena River nearby. The magnificent wall stood defiantly against the horror. Even with their protection, pillars of smoke spewed into the sky as homes turned to ashes within the city. The north wall of the grand Lecideshi temple, visible even from here, lay in rubble. Burnt siege towers stood discarded, obliterated before they could get to the wall. Cries and the dead roar of battle echoed from within the city. Acradumin could only imagine what atrocities were being committed there, to the fighters and the innocent. Today would birth nightmarish memories for many.</p>

            <p>“By Aohr,” Acradumin swore to himself under his breath. The war had raged for over a century already, but this battle was certainly one of the worst.</p>

            <p>Making his way up the sandy hill, Acradumin surveyed the chaos. Thousands of men lay dead. Most were men, though many were boys. None were elderly. Nobody survived long enough to be considered old these days in Lecidesha. Regardless of their age, they bore the sigils of three of the four warring factions, hastily painted on their cheap leather armor in bright oranges, blues, and greens to separate them from each other. Weapons lay discarded; swords, bows, axes. Arrows and spears sprouted like cruel weeds from many of the men.</p>

            <p>Some men wore jackets of mail, made from metal rings linked together. A sparse few of the men even wore full sets of expensive armor, boasting metal plates and thick leather. They had fallen like the rest. Limbs lay further away from their bodies than they ought to. The soil was moist and congealed, saturated with gore.</p>

            <p>Acradumin looked on with disgust, ignoring the filth that clung to his boots and the hems of his robe. The attendees and scholars who came as part of his caravan carefully trod among the bodies.</p>

            <p>“This is horrendous,” said Wyander, one of Acradumin’s nearby aides, ready with a stylus and writing tablet. He covered his nose and mouth with a rag to stop the acrid stink, “When will this end?”</p>

            <p>“While two or more of the Lecideshi factions still breathe, never,” Acradumin said sourly, noticing the body of a boy, no older than nine. Where was his mother? Dead as well? They continued on past him, and dozens of other dead, “And even then, another war will sprout in another part of the world. The pattern has never changed.”</p>

            <p>“My god, if I didn’t know better, I would guess that Man’s Vice is only getting worse,” Wyander said, gagging at the sight of a man torn in two, “It’s terrible.”</p>

            <p>“Perhaps it is,” Acradumin said solemnly. He gestured to the destruction, “This is what it was like before the Cleanse. We took great measures to keep mankind from returning to this. A waste.”</p>

            <p>“A waste, my god?”</p>

            <p>“We thought the Cleanse would humble humanity and instruct them in diligence and virtue,” Acradumin gritted his teeth.</p>

            <p>They approached the body of a slain elephant. The beast lay on its side, filled with enough arrows to fill the quivers of an entire team of archers. Twin blades, as long as an arm, were strapped to its tusks, caked in dried blood.</p>

            <p>“Man always finds a means of evil,” Acradumin said.</p>

            <p>“Hello?” a weak voice called out. Acradumin paused, Wyander following suit.</p>

            <p>“What is it, my Lord?” Wyander whispered, looking around cautiously, “Are we in danger?”</p>

            <p>“Who’s there?” the voice strained. Acradumin knit his brow together, looking around for the voice’s master.</p>

            <p>“Are you a healer?” the voice choked. Acradumin looked towards the corpse of the elephant. Laying half-crushed underneath its body was a man, his chest subtly rising and falling with sickly breath.</p>

            <p>“No, we are not healers,” Acradumin said in his rich bass voice.</p>

            <p>The man swore. He lay facing away from Acradumin and Wyander. He wore a jacket of studded leather armor, cankered with rust. It was clear somebody had tried to clean it off, but with little luck. The jacket had symbols painted on it in orange—marking him a North Lecideshi fighter. He had tied his hair with a rag to keep it out of his face.</p>

            <p>The man tried to turn around, but shouted in pain. Acradumin quickly stepped in front of the soldier.</p>

            <p>“Go bring a healer,” Acradumin ordered, waving Wyander off. He raised his eyebrows, and darted off to do as Acradumin asked.</p>

            <p>The soldier looked up at Acradumin, his brown eyes glazed with pain.</p>

            <p>“Are you… a sultan?” he asked, looking at Acradumin’s silk clothes. The man was easily no older than twenty-five. He kept his beard trimmed, though it was now stained from blood which had dripped out of his mouth.</p>

            <p>“I’m no sultan,” Acradumin said. He looked at where the elephant lay on the soldier’s body. He was clearly beyond help. The weight of the beast pulverized everything below his ribs. He was doomed.</p>

            <p>The soldier frowned in confusion. He looked Acradumin up and down.</p>

            <p>“Are you Orhen, come to take me from here? I thought she was…,” he coughed, struggling to speak, “... was a woman.”</p>

            <p>“She is,” Acradumin nodded, “I am not Orhen, I am Acradumin, God of Forces.”</p>

            <p>The soldier’s eyes widened. He labored to bow his head, even slightly.</p>

            <p>“Acradumin, Great One,” he said, “can you heal me?”</p>

            <p>“I… cannot, I have not my sister’s magic,” Acradumin said, “But worry not, a healer is coming.”</p>

            <p>“Okay,” the man said with a limp smile. He erupted into violent coughs. The soldier wheezed as he struggled to breathe, spitting out a thick glob of blood, “Are you here to save us?”</p>

            <p>A knot rose in Acradumin’s throat. The soldier’s voice was soaked in desperation. Even with his life ebbing away, he sought for his people’s dream. With tears trickling down his face, the man looked up hopefully at the god.</p>

            <p>“Tell me, friend,” Acradumin said after a pregnant pause, “what is your name?”</p>

            <p>“Ommre, the… the shipwright,” the soldier, Ommre, sputtered. His lips twitched in a smile, “A god has… has called me, a common man, friend.”</p>

            <p>“Regretably, Ommre,” Acradumin said, hesitating, “we cannot aid your faction, nor your enemies. The laws of the gods, and our own natures, forbid it.”</p>

            <p>Ommre’s face fell, the last glimpse of hope slipping away. His eyes were a soup of emotions. He began to silently sob, tears flowing freely down his cheeks, clearing away the dust clinging there.</p>

            <p>“I am truly sorry,” Acradumin said as the man shook.</p>

            <p>What could he do? Acradumin watched, helpless, as Ommre shuddered with his sobs. Where were Wyander and the healer? Acradumin couldn’t do anything to heal this man. He was powerless. However, that didn’t mean there was nothing he could do to help.</p>

            <p>“Ommre, do you have a family?”</p>

            <p>The soldier swallowed, gasping for air between sobs and blood, “Yes. My beautiful darling Saera. And, and, and,” Ommre stuttered, struggling to control himself, “my boy Monphe and my sweet girl Thaliel. I will… never see them again.”</p>

            <p>Ommre shook with tears, falling silent. Poor man. Acradumin knelt, resting his hand on Ommre’s shoulder. Thinking, he pursed his lips.</p>

            <p>“Friend,” Acradumin began, carefully choosing his words, “I will care for Saera, Monphe, and your little Thaliel. My people are a peaceful people. They will welcome them. They will be safe from the Lecideshi warlords up in Acrad’immar.”</p>

            <p>Acradumin paused, swallowing down his emotion, “Ommre. You are a hero. All who fight for their families are. This honor I give you; you will be known as a friend of Acradumin. Your family will know of your bravery and love. Thaliel and Monphe will grow knowing their father was a great man. They will be safe. I will protect them. This honor I can give you.”</p>

            <p>“Th… thank you, my fr… my friend.,” Ommre choked, with the first full smile Acradumin had seen from him. Blood splattered on the ground, Ommre coughing weakly. He began convulsing violently. His eyes lost focus.</p>

            <p>“Rest, friend,” Acradumin said, tears running down his cheeks, “Know that all is well.”</p>

            <p>Acradumin stood as Ommre’s life waned away. If a healer were here, they may be able to help. Even a common surgeon had a greater chance than Acradumin. What did being a god mean when you could do nothing for people? It was awfully ironic. Acradumin had as little power to help this young, dying father as he had to save mankind. Man had more power than a god.</p>

            <p>He didn’t know him, yet Acradumin couldn’t force away his sadness for Ommre. Nothing like this had ever happened to him before. Not when Arrchinivar collapsed or even during the Cleanse. Acradumin never had promised someone something like that, but he felt as though he needed to. He was nearly violating the law. He toed dangerously close to the line, but he didn’t care at the moment. He would abide by his word and face the consequences, if there would be any. Ommre’s family would be cared for.</p>

            <p>Most assumed the gods couldn’t feel emotions; completely without passion. Impassible, they called it in their seminaries. Clearly the negative ones were below one such as Acradumin. Gods must only be able to feel pleasant emotions, like joy or pleasure. They certainly enjoyed all the good and none of the bad. No stress, sadness, pain, anger, or anything akin to it.</p>

            <p>Ommre lay still, like the thousands of others who lay around him. The screams of the victims of the city echoed in Acradumin’s ears. Men, women, and even children. War-crazed men abused the innocent. Men slaughtered men. The dogs and hyenas took care of the leftovers. Chaos. Murder. Depravity. How could Man’s Vice have gone so far out of hand? How could they let this happen? What were the gods if they couldn’t care for their world?</p>

            <p>Acradumin allowed the tears to roll down his face.</p>

            <p>Most people didn’t understand the gods whom they worshiped. If only he could peel away the fog to let them see. Maybe, maybe there was just a chance, that they might realize just how human the gods were. They believed now that the gods stood ready to judge them. How would they act if they knew how little power the gods, in reality, had?</p>

            <p>Acradumin stepped away from Ommre as Wyander finally arrived with a healer, ichor in hand. The healer placed his hand on Ommre’s forehead, closing his own eyes tightly.</p>

            <p>“He’s already gone,” Acradumin said, blinking away his final tears. Wyander looked pale at the sight of the dead man, as though he wasn’t already surrounded by carnage.</p>

            <p>“I’m sorry, my god,” Wyander stuttered, “I tried to be swift, but I just couldn’t…”</p>

            <p>“Enough,” Acradumin raised his hand, silencing him. There was no question about it. Something must be done, “Summon the caravan. We now depart. Search for Ommre’s family and bring them to the Grand Archacard. I will reveal to him what he must do. In the meantime, it is time for the Congress of Gods to convene. A plan must be formulated. The Severance must occur."</p>`
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
    },
    
    'the-documents-of-martialis': {
        id: 2,
        slug: 'the-documents-of-martialis',
        title: "The Documents of Martialis",
        series: "union-of-the-sentinels",
        seriesName: "The Union of the Sentinels",
        seriesNumber: "Book 1 of 3",

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
        sampleChapterHeading: "Prologue - Lecidesha",
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
        },

        // Page Customization
        backgroundImage: "Immaria.png"
    },

    'burning-of-golandra': {
        id: 2,
        slug: 'burning-of-golandra',
        title: "The Burning of Golandra",
        series: null,
        seriesName: null,
        seriesNumber: null,

        // Publication Info
        currentStage: "Prewriting",
        stageProgress: 5,
        wordCount: 0,
        targetWordCount: 200000,
        published: false,
        releaseEstimate: "2028",
        estimatedPages: 650,

        // Book Details
        genre: ["Epic Fantasy"],
        subgenres: ["Political Fantasy", "Dark Fantasy"],
        pov: "Multiple Viewpoints - 3rd Person Limited",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult & Young Adult",
        setting: "The City of Golandra in a Mesoamerican-Roman Empire",
        status: "Prewriting",

        // Marketing
        tagline: "When a city burns, empires fall and legends are forged in the flames.",

        synopsis: "The ancient city of Golandra, jewel of the empire, stands on the brink of destruction. As political machinations and ancient magic converge, the fate of thousands hangs in the balance.",

        fullDescription: "The Burning of Golandra chronicles the devastating events that reshape the empire forever. As the second book in the Severance Chronicles, it explores the consequences of the first book's events and delves deeper into the cosmic forces threatening the world beneath the dying sun.",

        themes: [
            "Destruction and Rebirth",
            "Political Intrigue",
            "The Price of Progress",
            "Ancient Magic Awakening",
            "Moral Complexity"
        ],

        // Content
        contentWarnings: ["Violence", "War", "Destruction"],
        contentWarningsDesc: [
            "Contains graphic descriptions of war, city destruction, and mass casualties.",
            "Depicts large-scale conflict and its devastating consequences on civilian populations.",
            "Includes scenes of destruction and loss that may be disturbing to some readers."
        ],

        detailedContentWarnings: {
            violence: {
                level: "High",
                description: "Contains graphic descriptions of war, destruction, and mass casualties during the burning of a major city.",
                spoilerFree: true
            },
            war: {
                level: "High",
                description: "Large-scale warfare and its impact on civilians is a central theme.",
                spoilerFree: true
            }
        },

        // Characters
        mainCharacters: [
            {
                name: "To be revealed",
                role: "Character details coming soon",
                description: "Character information will be revealed as the book progresses through development.",
                traits: []
            }
        ],

        // Sample Content
        sampleChapterHeading: "Coming Soon",
        sampleChapter: [],

        // Extras
        extras: {
            playlist: null,
            pinterest: null,
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
            bookshop: '#',
            goodreads: '#',
            storyGraph: '#'
        },

        // Reviews (for when published)
        reviews: [],
        averageRating: null,

        // Related
        relatedBooks: [],

        // Metadata
        isbn: null,
        publisher: 'Self-Published',
        language: 'English',

        // Status
        status: "Prewriting",
        lastUpdated: "2025-01-15",

        // Page Customization
        particleSystem: "snow", // Options: "default", "snow", "embers", "stars"
        backgroundImage: "Golandra.png",

        // Progress Timeline Details
        progressMilestones: {
            'Prewriting': {
                description: 'Outlining the story, developing characters, and world-building for the burning of Golandra.',
                currentFocus: 'Story outline and character development',
                estimatedStart: 'Q2 2026'
            },
            'Drafting': {
                description: 'Writing the first draft',
                estimatedStart: 'Q4 2026'
            },
            'Revising': {
                description: 'Major revisions and restructuring',
                estimatedStart: 'Q3 2027'
            },
            'Editing': {
                description: 'Line editing and polishing',
                estimatedStart: 'Q1 2028'
            },
            'Publishing': {
                description: 'Final preparations for publication',
                estimatedDate: '2028'
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

// ============================================
// CENTRALIZED DATA FOR MULTI-PAGE SITE
// ============================================

// SERIES DATA
const seriesData = {
    "severance-chronicles": {
        id: "severance-chronicles",
        name: "Severance Chronicles",
        slug: "severance-chronicles",
        tagline: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty",
        bookCount: 1,
        plannedBooks: 4,
        publishedBooks: 0,
        status: "Active",
        genre: "Epic Fantasy",
        description: "The Severance Chronicles follows the intertwined fates of servants, slaves, and outcasts in a world where a dying sun threatens all existence. As empires crumble and gods awaken, those deemed powerless must rise to challenge the very foundations of their world. Set in a unique fantasy world inspired by Mesoamerican and Roman cultures, each book explores themes of power, freedom, and destiny through different perspectives as characters navigate political intrigue, ancient magic, and cosmic threats.",
        themes: ["Power and Servitude","Freedom and Destiny","Empire and Rebellion","Ancient Magic and Forgotten Gods","Cosmic Horror","Found Family and Betrayal"],
        worldBuilding: "A vast Mesoamerican-Roman inspired empire exists beneath a dying sun that waxes and wanes unpredictably. Ancient pyramids dot the landscape alongside Roman-style architecture. The world is divided into rigid social castes, with servants and slaves forming the foundation of society. As the sun dims, ancient powers and forgotten gods begin to stir, threatening to upend the established order.",
        worldSetting: "A Mesoamerican-Roman inspired empire beneath a dying sun",
        contentWarnings: ["Violence and war","Slavery and systemic oppression","Death and loss","Political intrigue and manipulation"],
        readingOrder: "chronological",
        books: ["the-day-when-servants-reign"],
        featuredArt: null,
        worldMap: null,
        commonCharacters: ["Various POV characters across books","Interconnected storylines"],
        magicSystem: "Ancient powers tied to the dying sun and forgotten gods. Magic is rare and dangerous, often requiring great sacrifice. Those who wield it are feared and revered in equal measure.",
        resources: {
            discussionForum: "#",
            bookClub: "#",
            fanArt: "#"
        },
        backgroundImage: "assets/images/Immaria.png"
    }
};

// BOOKS DATA
const booksData = {
    "the-day-when-servants-reign": {
        id: 1,
        slug: "the-day-when-servants-reign",
        title: "The Day When Servants Reign",
        hidden: false,
        series: "severance-chronicles",
        seriesName: "Severance Chronicles",
        seriesNumber: "Book 1 of 4",
        currentStage: "Drafting",
        stageProgress: 31,
        wordCount: 56000,
        targetWordCount: 200000,
        published: false,
        releaseEstimate: "Early 2027",
        estimatedPages: 650,
        genre: ["Epic Fantasy"],
        subgenres: ["Political Fantasy","Dark Fantasy"],
        pov: "Multiple Viewpoints - 3rd Person Limited",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult",
        setting: "A world of stratified realms; Acrad'immar, Mide'immar, and Soubd'immar. The story features all three realms, though focuses in a Mide'immarian Empire and Acrad'immar.",
        status: "Drafting",
        tagline: "In a world with a waxing and waning sun, every decision names its villains. The question remains; who are they?",
        synopsis: "Born into slavery beneath a surface empire's boot, Rennir has spent his life ducking his head and doing as he's commanded. When a war draft threatens his way of life Rennir and his friend Tad are forced to choose between subjection and death or rebellion and pain. But the line between liberation and revenge blurs with every body that hits the floor. In a theocracy ruling the atmosphere, a young cleric named Thaliel begins her service to a church whose grand messiah may be something far darker than his anointing promised. The Severance Chronicles opens at the moment when everything a person believes in becomes something they have to choose.",
        extendedSynopsis: "Born into slavery beneath a surface empire's boot, Rennir has spent his life ducking his head and doing as he's commanded. When a war draft threatens his way of life Rennir and his friend Tad are forced to choose between subjection and death or rebellion and pain. But the line between liberation and revenge blurs with every body that hits the floor. In a theocracy ruling the atmosphere, a young cleric named Thaliel begins her service to a church whose grand messiah may be something far darker than his anointing promised. The Severance Chronicles opens at the moment when everything a person believes in becomes something they have to choose.",
        themes: ["Friendship and Betrayal","The Problem of Evil","Faith and Doubt","Honor versus Loyalty","Corrupt Idealism"],
        contentWarnings: ["Violence","Slavery","Moral Ambiguity","Religious Extremism"],
        contentWarningsDesc: ["Combat, massacre, and acts of political, ideological, and ritual violence occur throughout, including civilian and military casualties of a wide variety of ages and backgrounds and the deaths of named characters.","The systematic enslavement of the Soubd'immarian people is central to the story; scenes depict abuse, dehumanization, and the psychological toll of generational bondage.","Characters from all stripes are forces to choose between bad and worse; there is no easy solution.","Instances include anti-heresy campaigns and ritual violence."],
        detailedContentWarnings: {
            violence: {
                level: "Moderate to High",
                description: "Combat, massacre, and acts of political, ideological, and ritual violence occur throughout, including civilian and military casualties of a wide variety of ages and backgrounds and the deaths of named characters.",
                spoilerFree: true
            },
            slavery: {
                level: "Moderate",
                description: "The systematic enslavement of the Soubd'immarian people is central to the story; scenes depict abuse, dehumanization, and the psychological toll of generational bondage.",
                spoilerFree: true
            },
            "moral-ambiguity": {
                level: "Moderate",
                description: "Characters from all stripes are forces to choose between bad and worse; there is no easy solution.",
                spoilerFree: true
            },
            "religious-extremism": {
                level: "Moderate",
                description: "Instances include anti-heresy campaigns and ritual violence.",
                spoilerFree: true
            }
        },
        mainCharacters: [
                  {
                            "name": "Ta'el Rennir",
                            "role": "Protagonist • Bastard Slave",
                            "description": "A mixed-blood Soubd'immarian fighter—son of a slave mother and a Mide'immarian master who never acknowledged him—Rennir has spent his life caught between two cultures who each claim he doesn't belong to them. When the revolution he's devoted himself to finally gathers momentum, he throws himself into it fully, driven by loyalty to his people and to prove which half of him he belongs to. But Rennir is not a man who can ignore depravity as he sees it, and as things begin to fall into place, he begins to falter.",
                            "traits": [
                                      "Principled",
                                      "Conflicted",
                                      "Loyal",
                                      "Stubborn",
                                      "Honorable"
                            ]
                  },
                  {
                            "name": "Finil Tad",
                            "role": "Secondary Protagonist • Ambitious Revolutionary",
                            "description": "Tad is the fire at the center of the Soubd'immarian resistance—brilliant, charismatic, and absolutely convinced that he is on the right side of history. He turned oppression into strategy and grief into purpose, and the men around him follow him because he makes them feel like their suffering means something. He genuinely believes in freedom for his people. The question of if Tad truly is right as he believes himself to be remains unanswered.",
                            "traits": [
                                      "Idealistic",
                                      "Persuasive",
                                      "Passionate",
                                      "Relentless",
                                      "Ambitious",
                                      "Certain"
                            ]
                  },
                  {
                            "name": "Prince Armund Rassfold",
                            "role": "POV Protagonist • Spoiled Prince",
                            "description": "Second son of the Estrezian Emperor, Armund has grown up in a bubble of self-indulgence and the distant whispers of responsibility. As he is thrust into leadership by a duty-bound father, he's forced to choose between a life of frivolity or diligence. As he indulges in his appetites, he comes to realize that there may be more for him than he'd ever known.",
                            "traits": [
                                      "Proud",
                                      "Brave",
                                      "Sharp",
                                      "Arrogant",
                                      "Strategic"
                            ]
                  },
                  {
                            "name": "Thaliel Saerashourd",
                            "role": "POV Protagonist • Inquisitive Priestess",
                            "description": "A newly ordained Staunch in an Acradumist Assemblage, Thaliel is quick-witted and genuinely faithful, ready to serve her God. She did not expect her ordination to be the beginning of a road of questions, conflicts, and tests of loyalty. As she trains to denounce and root out heresy, she begins to find that things are not as she believed and finds herself torn between friendship with apostates and loyalty to her God's chosen messiah.",
                            "traits": [
                                      "Curious",
                                      "Studious",
                                      "Spirited",
                                      "Earnest",
                                      "Honest"
                            ]
                  }
        ],
        sampleChapterHeading: "Prologue - Lecidesha",
        sampleChapter: [
            "<p>With his boot, Acradumin nudged one of the hundreds of corpses that lay strewn across the hot savanna. The body barely moved at the prodding. A dozen flies leapt off the man, taking to the air, joining what was easily thousands of others. Circling above the carnage, hundreds of carrion birds flocked, fattening themselves on the fallen men.</p>",
            "<p>The gibbous sun glared down angrily. The air danced with the heat. Already setting in, the stench of the battle’s aftermath hung thick in the air like a curtain, mixing with the haze of dust and smoke. Blood, sweat, urine, and decay. The odor of war.</p>",
            "<p>The Lecideshi savanna was not like Acradumin remembered. Over the past hundred years, and even in the past five years, the landscape transformed drastically. Countless roughly hewn stumps slumped where healthy acacias and royal baobab trees once towered, salvaged for campfires and siege weapons. Without them the landscape seemed empty. Herds of buffalo and wild rusen were slaughtered to feed armies. No longer did the trumpets of elephants or the melodies of songbirds season the prairie with their music. They were replaced by the groans and screams of dying men and the celebratory cries of the carrion birds, flies, and hyenas who had come for the feast.</p>",
            "<p>It seemed like the only thing that remained unchanged were the towering sandstone karsts, smoothed by centuries of wind. The pillars jutted out of the ground around the valley like the fingers of fallen gods, reaching up into the sky, where the islands of Acrad’immar drifted, as though unbothered by the devastation happening below.</p>",
            "<p>The city of Lecidesha sprawled proudly on the bank of the Lethena River nearby. The magnificent wall stood defiantly against the horror. Even with their protection, pillars of smoke spewed into the sky as homes turned to ashes within the city. The north wall of the grand Lecideshi temple, visible even from here, lay in rubble. Burnt siege towers stood discarded, obliterated before they could get to the wall. Cries and the dead roar of battle echoed from within the city. Acradumin could only imagine what atrocities were being committed there, to the fighters and the innocent. Today would birth nightmarish memories for many.</p>",
            "<p>“By Aohr,” Acradumin swore to himself under his breath. The war had raged for over a century already, but this battle was certainly one of the worst.</p>",
            "<p>Making his way up the sandy hill, Acradumin surveyed the chaos. Thousands of men lay dead. Most were men, though many were boys. None were elderly. Nobody survived long enough to be considered old these days in Lecidesha. Regardless of their age, they bore the sigils of three of the four warring factions, hastily painted on their cheap leather armor in bright oranges, blues, and greens to separate them from each other. Weapons lay discarded; swords, bows, axes. Arrows and spears sprouted like cruel weeds from many of the men.</p>",
            "<p>Some men wore jackets of mail, made from metal rings linked together. A sparse few of the men even wore full sets of expensive armor, boasting metal plates and thick leather. They had fallen like the rest. Limbs lay further away from their bodies than they ought to. The soil was moist and congealed, saturated with gore.</p>",
            "<p>Acradumin looked on with disgust, ignoring the filth that clung to his boots and the hems of his robe. The attendees and scholars who came as part of his caravan carefully trod among the bodies.</p>",
            "<p>“This is horrendous,” said Wyander, one of Acradumin’s nearby aides, ready with a stylus and writing tablet. He covered his nose and mouth with a rag to stop the acrid stink, “When will this end?”</p>",
            "<p>“While two or more of the Lecideshi factions still breathe, never,” Acradumin said sourly, noticing the body of a boy, no older than nine. Where was his mother? Dead as well? They continued on past him, and dozens of other dead, “And even then, another war will sprout in another part of the world. The pattern has never changed.”</p>",
            "<p>“My god, if I didn’t know better, I would guess that Man’s Vice is only getting worse,” Wyander said, gagging at the sight of a man torn in two, “It’s terrible.”</p>",
            "<p>“Perhaps it is,” Acradumin said solemnly. He gestured to the destruction, “This is what it was like before the Cleanse. We took great measures to keep mankind from returning to this. A waste.”</p>",
            "<p>“A waste, my god?”</p>",
            "<p>“We thought the Cleanse would humble humanity and instruct them in diligence and virtue,” Acradumin gritted his teeth.</p>",
            "<p>They approached the body of a slain elephant. The beast lay on its side, filled with enough arrows to fill the quivers of an entire team of archers. Twin blades, as long as an arm, were strapped to its tusks, caked in dried blood.</p>",
            "<p>“Man always finds a means of evil,” Acradumin said.</p>",
            "<p>“Hello?” a weak voice called out. Acradumin paused, Wyander following suit.</p>",
            "<p>“What is it, my Lord?” Wyander whispered, looking around cautiously, “Are we in danger?”</p>",
            "<p>“Who’s there?” the voice strained. Acradumin knit his brow together, looking around for the voice’s master.</p>",
            "<p>“Are you a healer?” the voice choked. Acradumin looked towards the corpse of the elephant. Laying half-crushed underneath its body was a man, his chest subtly rising and falling with sickly breath.</p>",
            "<p>“No, we are not healers,” Acradumin said in his rich bass voice.</p>",
            "<p>The man swore. He lay facing away from Acradumin and Wyander. He wore a jacket of studded leather armor, cankered with rust. It was clear somebody had tried to clean it off, but with little luck. The jacket had symbols painted on it in orange—marking him a North Lecideshi fighter. He had tied his hair with a rag to keep it out of his face.</p>",
            "<p>The man tried to turn around, but shouted in pain. Acradumin quickly stepped in front of the soldier.</p>",
            "<p>“Go bring a healer,” Acradumin ordered, waving Wyander off. He raised his eyebrows, and darted off to do as Acradumin asked.</p>",
            "<p>The soldier looked up at Acradumin, his brown eyes glazed with pain.</p>",
            "<p>“Are you… a sultan?” he asked, looking at Acradumin’s silk clothes. The man was easily no older than twenty-five. He kept his beard trimmed, though it was now stained from blood which had dripped out of his mouth.</p>",
            "<p>“I’m no sultan,” Acradumin said. He looked at where the elephant lay on the soldier’s body. He was clearly beyond help. The weight of the beast pulverized everything below his ribs. He was doomed.</p>",
            "<p>The soldier frowned in confusion. He looked Acradumin up and down.</p>",
            "<p>“Are you Orhen, come to take me from here? I thought she was…,” he coughed, struggling to speak, “... was a woman.”</p>",
            "<p>“She is,” Acradumin nodded, “I am not Orhen, I am Acradumin, God of Forces.”</p>",
            "<p>The soldier’s eyes widened. He labored to bow his head, even slightly.</p>",
            "<p>“Acradumin, Great One,” he said, “can you heal me?”</p>",
            "<p>“I… cannot, I have not my sister’s magic,” Acradumin said, “But worry not, a healer is coming.”</p>",
            "<p>“Okay,” the man said with a limp smile. He erupted into violent coughs. The soldier wheezed as he struggled to breathe, spitting out a thick glob of blood, “Are you here to save us?”</p>",
            "<p>A knot rose in Acradumin’s throat. The soldier’s voice was soaked in desperation. Even with his life ebbing away, he sought for his people’s dream. With tears trickling down his face, the man looked up hopefully at the god.</p>",
            "<p>“Tell me, friend,” Acradumin said after a pregnant pause, “what is your name?”</p>",
            "<p>“Ommre, the… the shipwright,” the soldier, Ommre, sputtered. His lips twitched in a smile, “A god has… has called me, a common man, friend.”</p>",
            "<p>“Regretably, Ommre,” Acradumin said, hesitating, “we cannot aid your faction, nor your enemies. The laws of the gods, and our own natures, forbid it.”</p>",
            "<p>Ommre’s face fell, the last glimpse of hope slipping away. His eyes were a soup of emotions. He began to silently sob, tears flowing freely down his cheeks, clearing away the dust clinging there.</p>",
            "<p>“I am truly sorry,” Acradumin said as the man shook.</p>",
            "<p>What could he do? Acradumin watched, helpless, as Ommre shuddered with his sobs. Where were Wyander and the healer? Acradumin couldn’t do anything to heal this man. He was powerless. However, that didn’t mean there was nothing he could do to help.</p>",
            "<p>“Ommre, do you have a family?”</p>",
            "<p>The soldier swallowed, gasping for air between sobs and blood, “Yes. My beautiful darling Saera. And, and, and,” Ommre stuttered, struggling to control himself, “my boy Monphe and my sweet girl Thaliel. I will… never see them again.”</p>",
            "<p>Ommre shook with tears, falling silent. Poor man. Acradumin knelt, resting his hand on Ommre’s shoulder. Thinking, he pursed his lips.</p>",
            "<p>“Friend,” Acradumin began, carefully choosing his words, “I will care for Saera, Monphe, and your little Thaliel. My people are a peaceful people. They will welcome them. They will be safe from the Lecideshi warlords up in Acrad’immar.”</p>",
            "<p>Acradumin paused, swallowing down his emotion, “Ommre. You are a hero. All who fight for their families are. This honor I give you; you will be known as a friend of Acradumin. Your family will know of your bravery and love. Thaliel and Monphe will grow knowing their father was a great man. They will be safe. I will protect them. This honor I can give you.”</p>",
            "<p>“Th… thank you, my fr… my friend.,” Ommre choked, with the first full smile Acradumin had seen from him. Blood splattered on the ground, Ommre coughing weakly. He began convulsing violently. His eyes lost focus.</p>",
            "<p>“Rest, friend,” Acradumin said, tears running down his cheeks, “Know that all is well.”</p>",
            "<p>Acradumin stood as Ommre’s life waned away. If a healer were here, they may be able to help. Even a common surgeon had a greater chance than Acradumin. What did being a god mean when you could do nothing for people? It was awfully ironic. Acradumin had as little power to help this young, dying father as he had to save mankind. Man had more power than a god.</p>",
            "<p>He didn’t know him, yet Acradumin couldn’t force away his sadness for Ommre. Nothing like this had ever happened to him before. Not when Arrchinivar collapsed or even during the Cleanse. Acradumin never had promised someone something like that, but he felt as though he needed to. He was nearly violating the law. He toed dangerously close to the line, but he didn’t care at the moment. He would abide by his word and face the consequences, if there would be any. Ommre’s family would be cared for.</p>",
            "<p>Most assumed the gods couldn’t feel emotions; completely without passion. Impassible, they called it in their seminaries. Clearly the negative ones were below one such as Acradumin. Gods must only be able to feel pleasant emotions, like joy or pleasure. They certainly enjoyed all the good and none of the bad. No stress, sadness, pain, anger, or anything akin to it.</p>",
            "<p>Ommre lay still, like the thousands of others who lay around him. The screams of the victims of the city echoed in Acradumin’s ears. Men, women, and even children. War-crazed men abused the innocent. Men slaughtered men. The dogs and hyenas took care of the leftovers. Chaos. Murder. Depravity. How could Man’s Vice have gone so far out of hand? How could they let this happen? What were the gods if they couldn’t care for their world?</p>",
            "<p>Acradumin allowed the tears to roll down his face.</p>",
            "<p>Most people didn’t understand the gods whom they worshiped. If only he could peel away the fog to let them see. Maybe, maybe there was just a chance, that they might realize just how human the gods were. They believed now that the gods stood ready to judge them. How would they act if they knew how little power the gods, in reality, had?</p>",
            "<p>Acradumin stepped away from Ommre as Wyander finally arrived with a healer, ichor in hand. The healer placed his hand on Ommre’s forehead, closing his own eyes tightly.</p>",
            "<p>“He’s already gone,” Acradumin said, blinking away his final tears. Wyander looked pale at the sight of the dead man, as though he wasn’t already surrounded by carnage.</p>",
            "<p>“I’m sorry, my god,” Wyander stuttered, “I tried to be swift, but I just couldn’t…”</p>",
            "<p>“Enough,” Acradumin raised his hand, silencing him. There was no question about it. Something must be done, “Summon the caravan. We now depart. Search for Ommre’s family and bring them to the Grand Archacard. I will reveal to him what he must do. In the meantime, it is time for the Congress of Gods to convene. A plan must be formulated. The Severance must occur.\"</p>"
        ],
        extras: {
            playlist: null,
            pinterest: null,
            moodBoard: null,
            inspiration: [],
            characterArt: [],
            maps: [],
            deletedScenes: []
        },
        purchaseLinks: {
            amazon: "#",
            barnesNoble: "#",
            bookshop: "#",
            goodreads: "#",
            storyGraph: "#"
        },
        reviews: [],
        averageRating: null,
        isbn: null,
        publisher: "Self-Published",
        language: "English",
        progressMilestones: {
            Prewriting: {
                completed: true,
                date: "2024-08",
                description: "Completed world-building, character arcs, and detailed outline. Researched Mesoamerican and Roman cultures to create an authentic blend.",
                notes: "The magic system went through three iterations before finding the right balance of mystery and power."
            },
            Drafting: {
                completed: false,
                startDate: "2024-09",
                currentFocus: "Act 2 - Palace conspiracy and the first manifestation of ancient powers",
                description: "Currently writing the first draft. Focusing on getting the story down without worrying about perfection.",
                notes: "The palace intrigue sections are coming together beautifully. Rennir and Tad's dynamic is stronger than I expected."
            },
            Revising: {
                completed: false,
                estimatedStart: "2025-06",
                description: "Major structural changes, plot holes fixed, character arcs refined."
            },
            Editing: {
                completed: false,
                estimatedStart: "2025-10",
                description: "Line editing, prose polishing, consistency checks."
            },
            Publishing: {
                completed: false,
                estimatedStart: "2026-03",
                description: "Cover design, formatting, marketing preparation, ARC distribution."
            },
            Published: {
                completed: false,
                estimatedDate: "Late 2026",
                description: "Book release and promotion."
            }
        },
        lastUpdated: "2025-01-15"
    },
    "the-documents-of-martialis": {
        id: 2,
        slug: "the-documents-of-martialis",
        title: "The Documents of Martialis",
        hidden: true,
        series: "union-of-the-sentinels",
        seriesName: "The Union of the Sentinels",
        seriesNumber: "Book 1 of 3",
        currentStage: "Drafting",
        stageProgress: 31,
        wordCount: 56000,
        targetWordCount: 200000,
        published: false,
        releaseEstimate: "Late 2026",
        estimatedPages: 650,
        genre: ["Epic Fantasy","Political Fantasy","Dark Fantasy"],
        subgenres: ["Political Fantasy","Dark Fantasy","Low Fantasy"],
        pov: "Multiple Viewpoints - 3rd Person Limited",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult & Young Adult",
        setting: "A Mesoamerican-Roman Empire",
        status: "Drafting",
        tagline: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty — against each other, empires, and gods.",
        synopsis: "In a world beneath a waxing and waning sun, those born to serve will wrestle for sovereignty — against each other, empires, and gods.",
        extendedSynopsis: "Rennir, a bastard slave in the imperial palace, has always known his place at the bottom of society. But when the dying sun threatens to plunge the world into eternal darkness, ancient powers begin to stir, and those born to serve find themselves at the center of a cosmic struggle. Alongside his ambitious friend Tad and the spoiled prince Armund, Rennir must navigate deadly palace intrigue, awakening magic, and the machinations of gods thought long dead. As empires crumble and the old order falls, the servants of the world face a choice: accept their fate, or seize the sovereignty that has been denied them for generations.",
        themes: ["Rising from servitude","Friendship and betrayal","The cost of power","Challenging destiny","Empire in decline"],
        contentWarnings: ["Violence","Veganism"],
        contentWarningsDesc: ["Describes visceral scenes of bloodshed and war. Some examples include describing corpses, death, and the aftermath of battles.","Descriptions of people who don't eat meat or even animal products, such as eggs or honey."],
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
        mainCharacters: [
                  {
                            "name": "Rennir",
                            "role": "Protagonist • Palace Slave",
                            "description": "Born into servitude at the imperial palace, Rennir has survived by keeping his head down and his ambitions hidden. But beneath his quiet exterior lies a sharp mind and a growing hunger for something more than the life prescribed for him. When ancient powers begin to stir and the sun itself threatens to die, Rennir finds himself at the center of events that will reshape the world.",
                            "traits": [
                                      "Clever",
                                      "Cautious",
                                      "Observant",
                                      "Hidden Ambition"
                            ]
                  },
                  {
                            "name": "Tad",
                            "role": "Deuteragonist • Ambitious Servant",
                            "description": "Where Rennir is cautious, Tad is bold. His ambition burns bright, and he sees opportunities where others see only danger. Tad's hunger for power and status drives him forward, but his friendship with Rennir is tested as they both reach for sovereignty. His charisma and cunning make him both an invaluable ally and a potential threat.",
                            "traits": [
                                      "Ambitious",
                                      "Charismatic",
                                      "Bold",
                                      "Calculating"
                            ]
                  },
                  {
                            "name": "Prince Armund",
                            "role": "Main Character • Imperial Prince",
                            "description": "Raised in privilege and luxury, Prince Armund has never had to question his place in the world. Spoiled and sheltered within the palace walls, he views the servants as little more than furniture. But as cosmic forces threaten the empire and events force him out of his gilded cage, Armund must confront what it means to truly lead—and whether he has the strength to do so.",
                            "traits": [
                                      "Privileged",
                                      "Naive",
                                      "Growing",
                                      "Conflicted"
                            ]
                  },
                  {
                            "name": "Lysara",
                            "role": "Supporting Character • Temple Priestess",
                            "description": "A priestess of the old gods, Lysara walks the line between the mortal world and the divine. She carries knowledge of ancient prophecies and forgotten magic, knowledge that makes her both valuable and dangerous. Her visions of the dying sun have driven her to desperate action, seeking out those who might prevent the coming darkness.",
                            "traits": [
                                      "Mystical",
                                      "Determined",
                                      "Secretive",
                                      "Burdened"
                            ]
                  }
        ],
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
        extras: {
            playlist: null,
            pinterest: null,
            inspiration: [],
            moodBoard: null,
            characterArt: [],
            maps: [],
            deletedScenes: []
        },
        purchaseLinks: {
            amazon: "#",
            barnesNoble: "#",
            bookshop: "#",
            goodreads: "#",
            storyGraph: "#"
        },
        reviews: [],
        averageRating: null,
        isbn: null,
        publisher: "Self-Published",
        language: "English",
        progressMilestones: {
            Prewriting: {
                completed: true,
                date: "2024-08",
                description: "Completed world-building, character arcs, and detailed outline. Researched Mesoamerican and Roman cultures to create an authentic blend.",
                notes: "The magic system went through three iterations before finding the right balance of mystery and power."
            },
            Drafting: {
                completed: false,
                startDate: "2024-09",
                description: "Currently writing the first draft. Focusing on getting the story down without worrying about perfection.",
                notes: "The palace intrigue sections are coming together beautifully. Rennir and Tad's dynamic is stronger than I expected.",
                currentFocus: "Act 2 - Palace conspiracy and the first manifestation of ancient powers"
            },
            Revising: {
                completed: false,
                description: "Major structural changes, plot holes fixed, character arcs refined.",
                estimatedStart: "2025-06"
            },
            Editing: {
                completed: false,
                description: "Line editing, prose polishing, consistency checks.",
                estimatedStart: "2025-10"
            },
            Publishing: {
                completed: false,
                description: "Cover design, formatting, marketing preparation, ARC distribution.",
                estimatedStart: "2026-03"
            },
            Published: {
                completed: false,
                description: "Book release and promotion.",
                estimatedDate: "Late 2026"
            }
        },
        lastUpdated: "2025-01-15",
        backgroundImage: "assets/images/Immaria.png"
    },
    "burning-of-golandra": {
        id: 2,
        slug: "burning-of-golandra",
        title: "The Burning of Golandra",
        hidden: true,
        series: "severance-chronicles",
        seriesName: "Severance Chronicles",
        seriesNumber: "Book 2 of 4",
        currentStage: "Prewriting",
        stageProgress: 5,
        wordCount: 0,
        targetWordCount: 200000,
        published: false,
        releaseEstimate: "2028",
        estimatedPages: 650,
        genre: ["Epic Fantasy"],
        subgenres: ["Political Fantasy","Dark Fantasy"],
        pov: "Multiple Viewpoints - 3rd Person Limited",
        povStyle: "Multiple Viewpoints - 3rd Person Limited",
        targetAudience: "Adult & Young Adult",
        setting: "The City of Golandra in a Mesoamerican-Roman Empire",
        status: "Prewriting",
        tagline: "When a city burns, empires fall and legends are forged in the flames.",
        synopsis: "The ancient city of Golandra, jewel of the empire, stands on the brink of destruction. As political machinations and ancient magic converge, the fate of thousands hangs in the balance.",
        themes: ["Destruction and Rebirth","Political Intrigue","The Price of Progress","Ancient Magic Awakening","Moral Complexity"],
        contentWarnings: ["Violence","War","Destruction"],
        contentWarningsDesc: ["Contains graphic descriptions of war, city destruction, and mass casualties.","Depicts large-scale conflict and its devastating consequences on civilian populations.","Includes scenes of destruction and loss that may be disturbing to some readers."],
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
        mainCharacters: [
                  {
                            "name": "To be revealed",
                            "role": "Character details coming soon",
                            "description": "Character information will be revealed as the book progresses through development.",
                            "traits": []
                  }
        ],
        sampleChapterHeading: "Coming Soon",
        sampleChapter: [],
        extras: {
            playlist: null,
            pinterest: null,
            inspiration: [],
            moodBoard: null,
            characterArt: [],
            maps: [],
            deletedScenes: []
        },
        purchaseLinks: {
            amazon: "#",
            barnesNoble: "#",
            bookshop: "#",
            goodreads: "#",
            storyGraph: "#"
        },
        reviews: [],
        averageRating: null,
        isbn: null,
        publisher: "Self-Published",
        language: "English",
        progressMilestones: {
            Prewriting: {
                description: "Outlining the story, developing characters, and world-building for the burning of Golandra.",
                currentFocus: "Story outline and character development",
                estimatedStart: "Q2 2026"
            },
            Drafting: {
                description: "Writing the first draft",
                estimatedStart: "Q4 2026"
            },
            Revising: {
                description: "Major revisions and restructuring",
                estimatedStart: "Q3 2027"
            },
            Editing: {
                description: "Line editing and polishing",
                estimatedStart: "Q1 2028"
            },
            Publishing: {
                description: "Final preparations for publication",
                estimatedDate: "2028"
            }
        },
        lastUpdated: "2025-01-15",
        backgroundImage: "assets/images/Golandra.png",
        particleSystem: "snow"
    }
};

// POST SERIES DATA
// Each series groups ordered blog posts (e.g. a multi-part guide).
// posts[] contains slugs in reading order.
const postSeries = {
    "mapmaking-guide": {
        id:          "mapmaking-guide",
        title:       "The Worldbuilder's Map Guide",
        description: "A step-by-step series on drawing fantasy maps from scratch — tools, geography, and finishing techniques.",
        posts:       ["mapmaking-part-1","mapmaking-part-2","mapmaking-part-3"]
    }
};

// NEWS/UPDATES DATA
const newsData = [
    {
        id:            "mapmaking-part-1",
        slug:          "mapmaking-part-1",
        category:      "worldbuilding",
        title:         "The Worldbuilder's Map Guide, Part 1: Tools & Foundations",
        date:          "2025-02-10",
        dateFormatted: "February 10, 2025",
        excerpt:       "Every great fantasy world starts with a map — but knowing where to begin can be daunting. In Part 1 of this series I cover the tools I use (both digital and analog), how to think about scale, and the very first marks you make on a blank page.",
        content:       `<p>Every fantasy world I have ever loved — Middle-earth, Roshar, Westeros — exists in my imagination as a geography first. Characters live <em>somewhere</em>. Armies march <em>across something</em>. Rivers drain <em>into somewhere</em>. Before I wrote a single scene of the Severance Chronicles, I drew a map. It was terrible. It was also one of the most useful things I ever did.</p>

<p>This series is the guide I wish I'd had at the start: practical, opinionated, and focused on the kind of maps that serve a story rather than impress a cartography subreddit.</p>

<h2>What You Actually Need</h2>

<p>Let's clear up the tool question immediately, because it paralyses a lot of people. You do not need:</p>
<ul>
  <li>Expensive software (Inkscape and GIMP are free and excellent)</li>
  <li>A drawing tablet (a mouse works fine for digital; pencil and paper works better for analog)</li>
  <li>Any formal art training whatsoever</li>
</ul>

<p>What you do need is a willingness to make something ugly at first. The map that helps you write the book is not the map that ends up on the inside cover. Those are two different objects with two different jobs.</p>

<h2>Analog vs. Digital</h2>

<p>I always start analog — an A4 sheet of plain paper, a pencil, and a fine-liner for committing lines I like. Analog forces decisions. You can't endlessly undo. You can't zoom in to the pixel level and obsess over a coastline detail that will be invisible at print size. You make a mark, you live with it, you move on.</p>

<p>Once the analog sketch is solid, I scan it and refine in Inkscape. This gives me clean vectors for any eventual print use, and lets me add colour layers without destroying the original linework.</p>

<h2>Thinking About Scale Before You Draw Anything</h2>

<p>The single most common mistake I see in first maps is inconsistent scale. A mountain range that looks a reasonable size turns out to be six hundred miles wide when you work backwards from the travel times in your story.</p>

<p>Before you draw anything, answer these two questions:</p>
<ol>
  <li><strong>How long does it take to walk across your map?</strong> A fit human covers roughly 25 miles a day on good roads. How many days does the journey at the centre of your plot take?</li>
  <li><strong>What is the largest real-world landmass you want to evoke?</strong> Western Europe? The continental US? A single island nation? Pick a real analogue and pin your map to that scale.</li>
</ol>

<p>Write those numbers at the top of your paper before the first line goes down. They will save you enormous continuity headaches later.</p>

<h2>Your First Marks</h2>

<p>In Part 2, we'll talk about coastlines and how to make them feel organic rather than geometric. But for now, your homework: take a blank sheet of paper, write your travel-time number and your scale analogue at the top, and draw a single irregular blob. That blob is your continent. It doesn't need to be good. It needs to exist.</p>

<p>The map that helps you write is the map you make today, not the one you plan to make when you feel ready.</p>`,
        tags:          ["worldbuilding","mapmaking-guide","craft"],
        featured:      true,
        highlight:     true,
        series:        "mapmaking-guide",
        seriesOrder:   1,
        readingTime:   null,
        image:         null,
    },
    {
        id:            "mapmaking-part-2",
        slug:          "mapmaking-part-2",
        category:      "worldbuilding",
        title:         "The Worldbuilder's Map Guide, Part 2: Coastlines & Geography",
        date:          "2025-02-17",
        dateFormatted: "February 17, 2025",
        excerpt:       "Coastlines are the hardest thing to draw naturally — and the easiest to get wrong. In Part 2 we cover how real geography works, why your mountains are probably in the wrong place, and techniques for making a world that feels ancient rather than designed.",
        content:       `<p>Last week you drew a blob. This week we make it feel like somewhere real.</p>

<p>The tell that kills most fantasy maps is geometric coastlines. Real coasts are the product of millions of years of erosion, deposition, tectonic movement, and sea level change. They are <em>noisy</em> at every scale. A perfectly smooth bay is a human construction — a harbour, a reservoir — not a natural feature.</p>

<h2>The Fractal Trick</h2>

<p>Real coastlines are fractal: if you zoom in, you find the same kind of jaggedness at every level of detail. You don't need to simulate this mathematically; you just need to think at two scales when you draw.</p>

<p>First pass: draw the large shapes — bays, peninsulas, the general in-and-out of the coast at the continental scale. Second pass, zoom in (or work with a finer pen) and add smaller-scale irregularities inside the shapes you just drew. The result will feel genuinely organic.</p>

<h2>Where Mountains Actually Go</h2>

<p>This is where most fantasy maps break geology. Mountains form at tectonic boundaries — where plates collide (creating fold mountains like the Himalayas or the Andes) or where older, harder rock resists erosion while everything around it wears away. They are almost never random. They form <em>ranges</em>, usually in long arcs.</p>

<p>For your purposes, two rules will get you 80% of the way there:</p>
<ol>
  <li>Mountains follow the interior edge of your major landmasses, parallel to ancient coastlines</li>
  <li>Rivers run away from mountains toward the sea. Every river needs a mountain or a high interior plateau as its source — rivers do not run uphill, they do not originate in the middle of plains</li>
</ol>

<p>If you violate rule 2, readers who care about geography will notice immediately. I know because I did it in my first draft map and three beta readers caught it independently.</p>

<h2>Rain Shadows and Climate</h2>

<p>Mountains create rain shadows. Moisture-laden air from the sea hits a mountain range, rises, cools, and drops its rain on the windward side. The leeward side is dry. This is why you get jungles on the west coasts of continents and deserts just inland of major ranges.</p>

<p>Figure out which direction your prevailing winds blow (usually west-to-east in temperate latitudes, east-to-west in tropics) and your climate map will largely write itself. Deserts east of major ranges. Lush forests on the windward coasts. This gives your world a logic that readers feel even if they can't articulate why.</p>

<h2>Next Week</h2>

<p>In Part 3, the final instalment: how to add human geography — roads, cities, political borders — and how to letter and finish a map so it looks intentional rather than rough. We'll also talk about the difference between a working map and a presentable one, and when you need each.</p>`,
        tags:          ["worldbuilding","mapmaking-guide","craft"],
        featured:      false,
        highlight:     false,
        series:        "mapmaking-guide",
        seriesOrder:   2,
        readingTime:   null,
        image:         null,
    },
    {
        id:            "mapmaking-part-3",
        slug:          "mapmaking-part-3",
        category:      "worldbuilding",
        title:         "The Worldbuilder's Map Guide, Part 3: Cities, Roads & Finishing",
        date:          "2025-02-24",
        dateFormatted: "February 24, 2025",
        excerpt:       "The final instalment: adding human geography to your world map. Where cities actually grow, how roads follow logic not aesthetics, and how to letter and finish a map so it looks like an artifact from inside the world rather than something you drew last Tuesday.",
        content:       `<p>We have coastlines. We have mountains in the right places, rivers running the right direction, and a rough sense of where it's wet and where it's dry. Now we add people.</p>

<h2>Where Cities Grow</h2>

<p>Cities do not grow where a ruler decided to put them. They grow where geography makes settlement easy and trade profitable. The checklist:</p>
<ul>
  <li><strong>Fresh water</strong> — every city is on or near a reliable water source. A river, a lake, a natural spring</li>
  <li><strong>Defensibility</strong> — early settlements favour high ground, river bends, or peninsulas — something that makes attacking expensive</li>
  <li><strong>Trade routes</strong> — where roads or rivers from multiple directions converge, a market town becomes a city</li>
  <li><strong>Resources</strong> — near mines, forests, agricultural land, or fishing grounds</li>
</ul>

<p>If a city on your map fails all four of these tests, you need either a very good story reason for it being there, or you need to move it.</p>

<h2>Roads Follow Logic</h2>

<p>Roads connect cities. They find mountain passes rather than going over summits. They follow river valleys rather than fighting the terrain. They are not straight lines (that's a Roman special case for military roads, and even then only across flat terrain).</p>

<p>Draw your roads after your cities. Let them find their own paths between the dots, bending around geographic obstacles. If two cities are on opposite sides of a mountain range, the road between them will go through the lowest available pass — and whoever controls that pass controls the trade between them. Story emerges from geography.</p>

<h2>Political Borders</h2>

<p>Borders follow rivers, mountain ridgelines, and the edges of natural regions — because these are the features that make them defensible and legible to the people living along them. A straight-line border, like the US-Canada 49th parallel, is almost always the result of political negotiation between powers who never actually went to look at the land in question. In a medieval-analog world, you'll rarely have those.</p>

<h2>Lettering and Finishing</h2>

<p>A few principles that separate a finished map from a sketch:</p>
<ol>
  <li><strong>Use font size to indicate importance</strong> — capitals in the largest text, towns smaller, villages smaller still, geographic features smaller than all settlements</li>
  <li><strong>Curve labels to follow the feature</strong> — mountain range labels curve along the range, river names follow the river</li>
  <li><strong>Leave breathing room</strong> — resist the urge to fill every empty space. Empty ocean and uninhabited wilderness are features, not failures</li>
  <li><strong>Add a compass rose and scale bar</strong> — these transform a drawing into a map in the reader's eye</li>
</ol>

<p>Finally: the map that appears in your book should look like it was made by someone inside your world, with the knowledge and biases of that world. It doesn't need to be accurate from a god's-eye view — it needs to feel like an artifact. That framing will forgive a lot of imperfections, and it will give your map a character that purely technical maps lack.</p>

<p>Good luck. Go draw something.</p>`,
        tags:          ["worldbuilding","mapmaking-guide","craft"],
        featured:      false,
        highlight:     false,
        series:        "mapmaking-guide",
        seriesOrder:   3,
        readingTime:   null,
        image:         null,
    },
    {
        id:            "progress-update-jan-2025",
        slug:          "progress-update-jan-2025",
        category:      "progress",
        title:         "Servants of the Dying Sun - Drafting Progress Update",
        date:          "2025-01-15",
        dateFormatted: "January 15, 2025",
        excerpt:       "Excited to share that the first draft of Servants of the Dying Sun has reached 45,000 words! Rennir's journey through the imperial palace is taking shape, and the political intrigue is intensifying. The magic system is proving to be more complex than I originally planned...",
        content:       `Full article content would go here...`,
        tags:          ["severance-chronicles","the-day-when-servants-reign","writing-progress"],
        featured:      false,
        highlight:     true,
        readingTime:   3,
        image:         null,
    },
    {
        id:            "crafting-magic-system",
        slug:          "crafting-magic-system",
        category:      "behind-scenes",
        title:         "Crafting the Magic System",
        date:          "2025-01-05",
        dateFormatted: "January 5, 2025",
        excerpt:       "Ever wondered how I design magic systems? In this post, I break down my process for creating the unique power dynamics in Servants of the Dying Sun. From initial concepts to balancing narrative needs with logical consistency...",
        content:       `Full article content would go here...`,
        tags:          ["severance-chronicles","worldbuilding","craft"],
        featured:      false,
        highlight:     false,
        readingTime:   5,
        image:         null,
    },
    {
        id:            "fan-art-spotlight-dec-2024",
        slug:          "fan-art-spotlight-dec-2024",
        category:      "spotlight",
        title:         "Reader Spotlight: Fan Art Feature",
        date:          "2024-12-28",
        dateFormatted: "December 28, 2024",
        excerpt:       "This month's reader spotlight showcases incredible fan art from the community! Check out these amazing interpretations of characters and scenes from my books. The creativity of readers never ceases to amaze me.",
        content:       `Full article content would go here...`,
        tags:          ["community","fan-art"],
        featured:      false,
        highlight:     false,
        readingTime:   2,
        image:         null,
    },
    {
        id:            "fall-exalted-revisions-complete",
        slug:          "fall-exalted-revisions-complete",
        category:      "progress",
        title:         "The Fall of the Exalted - Revisions Complete",
        date:          "2024-12-20",
        dateFormatted: "December 20, 2024",
        excerpt:       "I'm thrilled to announce that revisions for The Fall of the Exalted are now complete! The manuscript is with beta readers, and I'm incorporating their feedback. Expected release is still on track for Summer 2025.",
        content:       `Full article content would go here...`,
        tags:          ["writing-progress"],
        featured:      false,
        highlight:     false,
        readingTime:   3,
        image:         null,
    },
    {
        id:            "building-believable-worlds",
        slug:          "building-believable-worlds",
        category:      "behind-scenes",
        title:         "Building Believable Fantasy Worlds",
        date:          "2024-12-15",
        dateFormatted: "December 15, 2024",
        excerpt:       "Worldbuilding is one of my favorite parts of writing fantasy. In this post, I share my approach to creating immersive worlds that feel lived-in and authentic, including cultural details, economics, and social structures...",
        content:       `Full article content would go here...`,
        tags:          ["worldbuilding","craft"],
        featured:      false,
        highlight:     false,
        readingTime:   6,
        image:         null,
    },
    {
        id:            "book-signing-tour-announcement",
        slug:          "book-signing-tour-announcement",
        category:      "event",
        title:         "Book Signing Tour Announced",
        date:          "2024-12-01",
        dateFormatted: "December 1, 2024",
        excerpt:       "Exciting news! I'll be embarking on a book signing tour in Spring 2025, visiting cities across the country. More details and locations coming soon. Sign up for the newsletter to be the first to know when I'm coming to your city!",
        content:       `Full article content would go here...`,
        tags:          ["events","tour"],
        featured:      false,
        highlight:     true,
        readingTime:   2,
        image:         null,
    },
    {
        id:            "community-theories",
        slug:          "community-theories",
        category:      "spotlight",
        title:         "Community Theories: What Readers Are Predicting",
        date:          "2024-11-25",
        dateFormatted: "November 25, 2024",
        excerpt:       "The community has been buzzing with theories about what's coming next in the series. Some of you are scarily close to the truth! In this post, I react to your wildest predictions (no spoilers, I promise).",
        content:       `Full article content would go here...`,
        tags:          ["community","severance-chronicles"],
        featured:      false,
        highlight:     false,
        readingTime:   4,
        image:         null,
    }
];

// Category display labels
const categoryLabels = {
    "progress": "Book Progress",
    "event": "Event",
    "behind-scenes": "Behind the Scenes",
    "spotlight": "Reader Spotlight",
    "worldbuilding": "Worldbuilding",
    "craft": "Writing Craft",
    "lore": "Lore",
    "update": "Update"
};
const getCategoryLabel = (category) => categoryLabels[category] || category.replace(/-/g, ' ');

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

// Post series helpers
const getPostSeriesById = (id) => postSeries[id];
const getSeriesPosts = (seriesId) => {
    const s = postSeries[seriesId];
    if (!s) return [];
    return s.posts.map(slug => getNewsBySlug(slug)).filter(Boolean);
};
const getAllPostSeries = () => Object.values(postSeries);

// Auto reading time: strips HTML tags, counts words at 300 wpm.
// Returns null if content is a placeholder so callers can fall back to hardcoded readingTime.
const calcReadingTime = (content) => {
    if (!content || content.trim() === 'Full article content would go here...') return null;
    const text = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.split(' ').filter(w => w.length > 0).length;
    return Math.max(1, Math.ceil(words / 300));
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        seriesData,
        booksData,
        newsData,
        postSeries,
        getBookBySlug,
        getSeriesBySlug,
        getNewsBySlug,
        getNewsById,
        getNewsByCategory,
        getNewsByTag,
        getFeaturedNews,
        getLatestNews,
        getBooksInSeries,
        getPostSeriesById,
        getSeriesPosts,
        getAllPostSeries,
        calcReadingTime
    };
}

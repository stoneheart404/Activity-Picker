// Heart SVGs
const heartOutline = `
<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" 
    fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929
           C17.9049 15.523 15.5374 18.1613 13.0053 20.5997
           C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547
           L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 
           3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 
           11.7346 4.73157L11.9998 5.00642L12.2648 4.73173
           C13.3324 3.6245 14.7864 3 16.3053 3
           C17.8242 3 19.2781 3.62444 20.3458 4.73157
           C21.4063 5.83045 22 7.31577 22 8.86222Z"
        stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
`;

const heartFilled = `
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" 
    xmlns="http://www.w3.org/2000/svg" stroke-width="1.5">
  <path fill-rule="evenodd" clip-rule="evenodd" 
        d="M11.9999 3.94228C13.1757 2.85872 14.7069 2.25 16.3053 2.25
           C18.0313 2.25 19.679 2.95977 20.8854 4.21074
           C22.0832 5.45181 22.75 7.1248 22.75 8.86222
           C22.75 10.5997 22.0831 12.2728 20.8854 13.5137
           C20.089 14.3393 19.2938 15.1836 18.4945 16.0323
           C16.871 17.7562 15.2301 19.4985 13.5256 21.14
           L13.5216 21.1438C12.6426 21.9779 11.2505 21.9476 10.409 21.0754
           L3.11399 13.5136C0.62867 10.9374 0.62867 6.78707 3.11399 4.21085
           C5.54605 1.68984 9.46239 1.60032 11.9999 3.94228Z" 
        fill="currentColor"/>
</svg>
`;

// Activity levels
const levels = {
    "level 1": ["Read a book", "Clean your room", "Clean your desk", "Get out of bed", 
        "Touch grass", "Go for a walk", "Meditate", "Stretch", "Drink water", 
        "Make your bed", "Write a to-do list", "Call a friend", "Text a family member", 
        "Sketch", "Draw", "Paint", "Write a poem", "Bake something", "Cook a new recipe", 
        "Do a puzzle", "Organize a drawer", "Make a vision board", "Plan your week", 
        "Plan your day", "Go for a run", "Do yoga", "Try a new workout", "Watch a movie", 
        "Watch a TV show", "Play a video game", "Go outside", "Write a journal", 
        "Learn a new word", "Practice mindfulness", "Organize your desk", "Do 10 push-ups", 
        "Clean your inbox", "Listen to music", "Create a playlist", "Draw something", 
        "Play chess", "Watch a documentary", "Do a random act of kindness", "Take a nap",
        "Read a poem", "Write a letter", "Make a craft", "Do a brain teaser", "Try origami",
        "Play a board game", "Do some gardening", "Take a photo walk", "Visit a park",
        "Go for a bike ride", "Try a new coffee shop", "Visit a library", "Do some stretching",
        "Take a different route", "Try a new fruit", "Make a smoothie", "Do a crossword puzzle",
        "Listen to a podcast", "Watch a TED talk", "Try a new hairstyle", "Do some journaling",
        "Make a gratitude list", "Try a new tea", "Do a digital detox", "Practice deep breathing",
        "Write a short story", "Do a quick workout", "Try a new snack", "Take a different route to work",
        "Make a new recipe", "Do a quick meditation", "Try a new fruit or vegetable", "Do a 5-minute stretch",
        "Make a new playlist", "Do a quick clean-up", "Try a new hobby", "Take a different route to school",
        "Make a new friend", "Do a quick workout routine", "Try a new type of cuisine", "Take a different route to the store",
        "Make a new dessert", "Do a quick yoga session", "Try a new type of exercise", "Take a different route to the park",
        "Make a new breakfast recipe", "Do a quick mindfulness exercise", "Try a new type of tea", "Take a different route to the gym",
        "Make a new lunch recipe", "Do a quick breathing exercise", "Try a new type of coffee", "Take a different route to the beach",
        "Make a new dinner recipe", "Do a quick stretching routine", "Try a new type of smoothie", "Take a different route to the mountains",
        "Make a new snack recipe", "Do a quick meditation session", "Try a new type of juice", "Take a different route to the countryside",
        "Make a new salad recipe", "Do a quick workout challenge", "Try a new type of water", "Take a different route to the city center",
        "Make a new soup recipe", "Do a quick yoga challenge", "Try a new type of milk", "Take a different route to the zoo",
        "Make a new pasta recipe", "Do a quick mindfulness challenge", "Try a new type of bread", "Take a different route to the museum",
        "doodle for 5 minutes", "write a haiku", "list 5 things you're grateful for", "do a quick workout", "take a different route home", "try a new fruit", "make a smoothie",
        "do a crossword puzzle", "listen to a podcast", "watch a TED talk", "try a new hairstyle", "do some journaling", "make a gratitude list",
        "try a new tea", "do a digital detox", "practice deep breathing", "write a short story", "do a quick workout", "try a new snack",
        "buy a puzzle and solve it", "plant a small herb garden", "take a different route to work", "make a new recipe", "do a quick meditation",
        "solve a rubik's cube", "try a new fruit or vegetable", "do a 5-minute stretch", "make a new playlist", "do a quick clean-up",
        "solve riddles", "solve unsolved mysteries", "read a short story", "watch a short film", "try a new ice cream flavor", "do a quick dance session",
        "learn a magic trick", "try a new board game", "do a quick art project", "make a new craft", "try a new type of chocolate", "do a quick photography session",
        "learn a new card game", "try a new type of cheese", "do a quick writing exercise", "make a new dessert", "try a new type of cookie", "do a quick puzzle",
        "learn a new dance move", "try a new type of pie", "do a quick sketch", "make a new breakfast recipe", "try a new type of muffin", "do a quick brainstorming session",
        "learn a new juggling trick", "try a new type of pancake", "do a quick meditation session", "make a new lunch recipe", "try a new type of sandwich",
        "do a quick breathing exercise", "learn a new yoga pose", "try a new type of salad", "make a new dinner recipe", "try a new type of stir-fry",
    ],

    "level 2": ["Learn a new skill", "Start a new hobby", "Volunteer", "Write a short story", 
        "Wash dishes", "Do laundry", "Clean the house", "Go for a hike", "Visit a museum", "Take a day trip", 
        "Try a new restaurant", "Attend a workshop", "Join a club", "Go to a concert", "Take a class", 
        "Learn to dance", "Go camping", "Visit a new city", "Take a road trip", "Learn to swim", 
        "Try a new sport", "Go fishing", "Take a cooking class", "Go to a play", "Visit a zoo", 
        "Take a photography walk", "Learn to skateboard", "Try rock climbing", "Go kayaking", 
        "Take a pottery class", "Go horseback riding", "Learn to surf", "Take a painting class", 
        "Go to a comedy show", "Visit an art gallery", "Take a music lesson", "Try archery", 
        "Go to a theme park", "Take a language class", "Go on a boat ride", "Visit a botanical garden", 
        "Take a writing workshop", "Go to a farmers market", "Try a new fitness class", "Visit a historical site",
        "Take a dance class", "Go to a spa", "Try a new cuisine", "Visit an aquarium", "Take a meditation class",
        "Go to a book reading", "Try a new craft", "Visit a planetarium", "Take a self-defense class", 
        "Go to a trivia night", "Try a new workout routine", "Visit a local landmark", "Take a gardening class",
        "Go to a food festival", "Try a new type of art", "Visit a new neighborhood", "Take a yoga class",
        "Go to a wine tasting", "Try a new type of dance", "Visit a new park", "Take a cooking workshop",
        "Go to a music festival", "Try a new type of exercise class", "Visit a new cafe", "Take a photography class",
        "Go to a cultural festival", "Try a new type of cuisine", "Visit a new museum", "Take a creative writing class",
        "Go to a dance performance", "Try a new type of workout", "Visit a new art gallery", "Take a painting workshop",
        "Draw a comic", "Write a song", "Make a short film", "Create a podcast episode", "Design a simple website",
        "Build a small piece of furniture", "Create a digital art piece", "Write a blog post", "Make a music playlist",
        "Design a logo", "Create a social media post", "Build a simple app", "Write a script for a video",
        "Create a marketing plan", "Design a flyer", "Build a personal budget", "Write a business proposal",
        "Create a workout plan", "Design a meal plan", "Build a travel itinerary", "Write a book review",
        "Create a photo collage", "Design a poster", "Build a vision board", "Write a poem collection",
        "Create a scrapbook", "Design a comic strip", "Build a model", "Write a short story collection",

    ],
    "level 3": ["Start a blog", "Build a website", "Learn a new language", "Write a book", 
        "Run a marathon", "Train for a triathlon", "Climb a mountain", "Travel to a new country", 
        "Start a business", "Create an app", "Learn to code", "Write a screenplay", "Make a short film", 
        "Design a game", "Create a podcast", "Write a song", "Produce music", "Choreograph a dance", 
        "Direct a play", "Paint a mural", "Sculpt something", "Build furniture", "Renovate a room",
        "Start a YouTube channel", "Create an online course", "Write a research paper", "Invent something", 
        "Design a fashion line", "Start a charity", "Organize a community event", "Run for office", 
        "Create a documentary", "Write a grant proposal", "Develop a marketing plan", 
        "Launch a crowdfunding campaign", "Create a social media strategy", 
        "Plan a large event", "Lead a team project", "Conduct an experiment", 
        "Write a business plan", "Create a financial plan", "Design a product", "Plan an event",
        "Program a robot", "Build a drone", "Create a virtual reality experience", "Design a board game", "Write a comic book",
        "Create a sculpture", "Build a treehouse", "Design a garden", "Program a Discord bot", "Create a mobile game", "Write a novel",
        "Develop a software tool", "Create an animation", "Design a website layout", "Build a PC", "Create a digital art piece", "Write a technical manual",
        "Design a logo", "Create a brand identity", "Plan a marketing campaign", "Develop a fitness program", "Create a meal plan", "Design a workout routine",
        "Plan a travel itinerary", "Create a budget", "Design a home office", "Build a bookshelf", "Create a photo album", "Design a tattoo", 
        "Write a memoir", "Create a family tree", "Plan a surprise party", "Create a scavenger hunt", "Design a treasure map",
        "Write a fantasy story", "Create a sci-fi world", "Design a superhero", "Build a model airplane", "Create a diorama", "Design a cosplay outfit",
        "Write a children's book", "Create a puppet show", "Design a board game", "Build a model train set", "Create a stop-motion animation", "Design a comic strip",
        "Write a mystery novel", "Create a thriller story", "Design a horror story", "Build a Lego set", "Create a Minecraft world", "Design a video game level",
        "Write a historical fiction novel", "Create a romance story", "Design a drama script", "Build a Rube Goldberg machine", "Create a science experiment",
        "Design a math puzzle", "Write a philosophical essay", "Create a political campaign", "Design a social movement", "Build a community garden",
        "Create a neighborhood watch program", "Design a recycling program", "Write an environmental action plan", "Create a wildlife conservation project",
        "Design a sustainable living plan", "Build a solar oven", "Create a rainwater harvesting system", "Design a composting system", "Write a book on sustainability",
        "Design prints and posters", "Create a magazine", "Design a newsletter", "Write articles for a blog", "Create a photo essay", "Design an infographic", 
        "Build a portfolio website", "Create a personal brand", "Design a resume and cover letter", "Write a LinkedIn profile", "Create a job search strategy",
        "Design a career development plan", "Build a professional network", "Create a mentorship program", "Design a leadership training program", "Write a business case study",
        "Create a customer journey map", "Design a user experience flow", "Build a prototype", "Create a minimum viable product", "Design a pitch deck",
        "Write a sales strategy", "Create a customer acquisition plan", "Design a retention strategy", "Build a customer feedback system", "Create a loyalty program", 
        "Write a public relations plan", "Create a media kit", "Design a press release", "Build a crisis communication plan", "Create a social responsibility program", 
        "Design an employee engagement program", "Write a company culture manifesto", "Create a diversity and inclusion plan", "Design an employee wellness program", 
        "Build a remote work policy", "Create a flexible work schedule", "Design a team-building activity", "Write a conflict resolution plan", 
        "Create a performance review process", "Design a professional development program", "Build an onboarding process", "Create an offboarding process", 
        "Design an employee recognition program", "Design a referral program", "Write a succession plan", "Create a knowledge management system", 
        "Design a project management process", "Build a workflow automation", "Create a time management system", "Design a productivity hack", "Write a goal-setting framework",
        "Create a habit tracker", "Design a mindfulness practice", "Build a meditation space", "Create a gratitude journal", "Design a vision board",
        "Write a life mission statement", "Create a bucket list", "Design a personal growth plan", "Build a self-care routine", "Create a stress management plan",
        "Design a sleep hygiene routine", "Write a healthy eating plan", "Create a fitness challenge", "Design a workout playlist", "Build a home gym",
        "Create a running route", "Design a cycling route", "Write a hiking trail guide", "Create a travel blog", "Design a travel photography portfolio",
        "Build a travel itinerary", "Create a language learning plan", "Design a cultural immersion experience", "Write a travel memoir", "Create a travel vlog",
        "Try boxing", "program a file encryption tool", "build a personal finance app", "create a meditation app", "design a fitness tracker", "write a cookbook",
        "create a travel guide", "Design a home automation system", "build a smart mirror", "create a weather station", "design with a 3D printer", "write a tech blog",
        "Study how to use Blender", "Learn about AI and machine learning", "explore blockchain technology", "research quantum computing", "investigate cybersecurity",
        "develop a game using Unity", "create a website using React", "build a mobile app using Flutter", "design graphics using Adobe Illustrator",
        "edit videos using Adobe Premiere", "compose music using FL Studio", "produce podcasts using Audacity", "write scripts using Final Draft", 
        "create animations using After Effects", "design user interfaces using Figma", "build databases using SQL", "learn about cloud computing", "explore DevOps practices",
        "study data science and analytics", "research virtual reality development", "investigate augmented reality applications", "develop chatbots using Python",
        "create IoT projects using Arduino", "build home automation systems using Raspberry Pi", "design electronic circuits", "write technical documentation",
        "create online tutorials", "design e-learning courses", "build educational games", "write lesson plans", "develop training materials", "create assessment tools",
        "design interactive simulations", "build virtual labs", "create study guides", "write research papers", "develop academic presentations", "create infographics for education",
        "design educational posters", "build a personal library", "create a reading challenge", "write book reviews", "develop a book club", "create literary analyses",
        "design character studies", "build plot diagrams", "create thematic essays", "write poetry collections", "develop short story anthologies",
        "create novel outlines", "design screenplay treatments", "build film storyboards", "create production schedules", "write film reviews", 
        "develop film critiques", "create a film festival", "design a film club", "build a film portfolio", "create a film blog", "write a film script", "develop a film pitch",
        "create a film trailer", "design a film poster", "build a film website", "create a film social media presence", "write a film synopsis", 
        "develop a film marketing plan", "create a film distribution strategy", "design a film screening event", "build a film networking group", 
        "create a film funding proposal", "write a film grant application", "develop a film production budget", "create a film crew list",
        "create a travel log map", "design a travel scrapbook", "build a travel photo album", "create a travel video montage", "write a travel diary",
        "develop a travel itinerary planner", "create a travel budget tracker", "design a travel packing list", "build a travel safety guide",
        "Study Chinese", "Learn Spanish", "Practice French", "Explore German", "Discover Japanese", "Understand Russian", "Master Italian", 
        "Pick up Portuguese", "Get into Arabic", "Familiarize with Hindi", "Learn Korean", "Study Turkish", 
        "Explore Dutch", "Discover Swedish", "Understand Greek", "Master Polish", "Pick up Hebrew", "Get into Vietnamese", 
        "Familiarize with Thai", "Learn Filipino", "Study Indonesian", "Explore Romanian", "Discover Hungarian", "Understand Czech", "Master Finnish", 
        "Pick up Danish", "Get into Norwegian", "Familiarize with Bulgarian", "Learn Croatian", "Study Serbian", "Explore Slovak", "Discover Lithuanian", 
        "Understand Latvian", "Master Estonian", "Pick up Icelandic", "Get into Welsh", "Familiarize with Gaelic", "Learn Swahili", "Study Zulu", 
        "Explore Afrikaans", "Discover Amharic", "Understand Yoruba", "Master Igbo", "Pick up Hausa", "Get into Somali", "Familiarize with Malagasy", 
        "Learn Maori", "Study Samoan", "Explore Tongan", " Discover Fijian", "Understand Haitian Creole", "Master Luxembourgish", "Pick up Maltese", "Get into Galician", 
        "Familiarize with Basque", "Discover Fijian", "Understand Haitian Creole", "Master Luxembourgish", "Pick up Maltese", "Get into Galician", "Familiarize with Basque",
        "Learn Esperanto", "Study Latin", "Explore Ancient Greek", "Discover Sanskrit", "Understand Aramaic", "Master Old English", "Pick up Middle English",
        "Get into Old Norse", "Familiarize with Gothic", "Learn Coptic", "Study Phoenician", "Explore Sumerian", "Discover Akkadian", "Understand Hittite",
        "Master Elamite", "Pick up Etruscan", "Get into Mycenaean Greek", "Familiarize with Old Persian", "Learn Avestan", "Study Tocharian", "Explore Ugaritic",
        "Discover Old Church Slavonic", "Understand Pali", "Master Prakrit", "Pick up Classical Nahuatl", "Get into Classical Quechua", "Familiarize with Classical Tibetan",
        "Learn Old Irish", "Study Middle Welsh", "Explore Old High German", "Discover Middle Low German", "Understand Old French", "Master Middle Dutch", 
        "Pick up Old Spanish", "Get into Old Portuguese", "make a website for personal projects", "create a blog to share your thoughts", 
        "design a portfolio to showcase your work", "build an online store to sell products", "develop a social media presence to connect with others", 
        "launch a YouTube channel to share videos", "start a podcast to discuss topics of interest", "create an online course to teach a skill", 
        "design a mobile app to solve a problem", "build a game to entertain others", "develop a tool to improve productivity", "create a newsletter to share updates",
        "design a logo to represent your brand", "build a brand identity to establish your presence", "develop a marketing strategy to reach your audience",
        "design a business plan to outline your goals", "create a financial plan to manage your resources", "build a team to support your vision", 
        "develop a network to expand your opportunities", "create a sales funnel to convert leads", "design a customer service plan to support your clients",
        "launch a crowdfunding campaign to raise funds", "create a pitch deck to present your ideas", "design a sales strategy to generate revenue", 
        "build a customer base to grow your business", "develop a product roadmap to guide your development", "create a user experience to delight your customers", 
        "design a customer journey to enhance satisfaction", "build a feedback system to gather insights", "develop a retention strategy to keep customers", 
        "create a loyalty program to reward customers", "design a referral program to encourage word-of-mouth", "build a public relations plan to manage your reputation", 
        "develop a media kit to showcase your brand", "create a crisis communication plan to handle emergencies", "design a social responsibility program to give back", 
        "build an employee engagement program to motivate your team", "develop a diversity and inclusion plan to foster belonging", 
        "create an employee wellness program to support health", "design a remote work policy to enable flexibility", "build a flexible work schedule to accommodate needs", 
        "develop a team-building activity to strengthen bonds", "create a conflict resolution plan to address issues", 
        "design a performance review process to provide feedback", "build a professional development program to enhance skills", 
        "create an onboarding process to welcome new hires", "design an offboarding process to exit employees smoothly", "design tarot deck",
        "build an employee recognition program to celebrate achievements", "create a referral program to attract talent", "design a card/board game",
        "design a succession plan to ensure continuity", "build a knowledge management system to capture expertise", "mentor a student",
        "create a study group to support learning", "design a tutoring program to assist peers", "organize a hackathon to foster innovation", 
        "lead a workshop to share knowledge", "host a webinar to educate others", "create a conference to connect professionals",
        "create a project management process to organize work", "design a workflow automation to streamline tasks", "build a time management system to optimize productivity",
        "design a productivity hack to boost efficiency", "write a goal-setting framework to clarify objectives", "create a habit tracker to monitor progress",
        "design a mindfulness practice to enhance focus", "build a meditation space to promote calm", "create a gratitude journal to cultivate positivity",
        "design a vision board to visualize aspirations", "write a life mission statement to define purpose", "create a bucket list to inspire adventures",
        "design a personal growth plan to foster development", "build a self-care routine to maintain well-being", "create a stress management plan to handle pressure",
        "design a sleep hygiene routine to improve rest", "write a healthy eating plan to nourish the body", "create a fitness challenge to motivate exercise",
        "design a workout playlist to energize activity", "build a home gym to facilitate fitness", "create a running route to explore the area",
        "design a cycling route to enjoy the scenery", "write a hiking trail guide to share experiences", "create a travel blog to document journeys",
        "design a travel photography portfolio to showcase images", "build a travel itinerary to plan trips", "create a language learning plan to acquire skills",
        "read the dictionary", "write a letter to your future self", "create a time capsule", "design a family crest", "build a model of your dream house",
        "create a scrapbook of your favorite memories", "design a comic book about your life", "write a song about your experiences", "make a vision board for your goals",
        "create a photo album of your travels", "design a logo for your personal brand", "build a website to showcase your work", "write a blog about your passions",
        "create a podcast to share your ideas", "design a mobile app to solve a problem", "build a social media presence to connect with others",
        "create an online course to teach a skill", "design a marketing plan to promote your work", "build a network of like-minded individuals",
        "read the *your next five move* - by patrick bet-david", "read the *the art of war* - by sun tzu", "read the *the 48 laws of power* - by robert greene", 
        "read the *the rich dad poor dad* - by robert kiyosaki", "read the *the millionaire fastlane* - by mj demarco", "read the *the one thing* - by gary keller",
        "read the *think and grow rich* - by napoleon hill", "read the *how to win friends and influence people* - by dale carnegie", 
        "read the *the power of habit* - by charles duhigg", "read the *atomic habits* - by james clear", "read the *deep work* - by cal newport",
        "read the *essentialism* - by greg mckeown", "read the *the 7 habits of highly effective people* - by stephen covey", 
        "read the *getting things done* - by david allen", "read the *the effective executive* - by peter drucker", "read the *first things first* - by stephen covey",
        "read the *the subtle art of not giving a f*ck* - by mark manson", "read the *you are a badass* - by jen sincero", 
        "read the *the magic of thinking big* - by david schwartz", "read the *man’s search for meaning* - by viktor frankl", "read the *meditations* - by marcus aurelius",
        "read the *the daily stoic* - by ryan holiday", "read the *ego is the enemy* - by ryan holiday", "read the *the obstacle is the way* - by ryan holiday", 
        "read the *the power of now* - by eckhart tolle", "read the *a new earth* - by eckhart tolle", "read the *flow* - by mihaly csikszentmihalyi", 
        "read the *grit* - by angela duckworth", "read the *drive* - by daniel pink", "read the *outliers* - by malcolm gladwell", 
        "read the *blink* - by malcolm gladwell", "read the *the tipping point* - by malcolm gladwell", "read the *daring greatly* - by brene brown", 
        "read the *rising strong* - by brene brown", "read the *braving the wilderness* - by brene brown", "read the *the gifts of imperfection* - by brene brown",
        "read the *the 5 am club* - by robin sharma", "read the *the war of art* - by steven pressfield", "read the *the dip* - by seth godin", 
        "read the *purple cow* - by seth godin", "read the *linchpin* - by seth godin", "read the *the icarus deception* - by seth godin", 
        "read the *this is marketing* - by seth godin",


    ]
};

const remaining = {
    "level 1": [...levels["level 1"]],
    "level 2": [...levels["level 2"]],
    "level 3": [...levels["level 3"]]
};
const lastPicked = { "level 1": null, "level 2": null, "level 3": null };

// Load favorites from localStorage
let favorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

// Populate dropdown
function populateLevels() {
    const select = document.getElementById("levelSelect");
    Object.keys(levels).forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        select.appendChild(option);
    });
}

function pickRandom() {
    const selectedLevel = document.getElementById("levelSelect").value;
    const resultBox = document.getElementById("result");
    if (!selectedLevel) { 
        resultBox.textContent = "Please select a level!"; 
        return; 
    }
    if (remaining[selectedLevel].length === 0) {
        remaining[selectedLevel] = [...levels[selectedLevel]];
    }

    let index, choice;
    if (remaining[selectedLevel].length === 1) {
        choice = remaining[selectedLevel].splice(0, 1)[0];
    } else {
        do {
            index = Math.floor(Math.random() * remaining[selectedLevel].length);
            choice = remaining[selectedLevel][index];
        } while (choice === lastPicked[selectedLevel]);
        remaining[selectedLevel].splice(index, 1);
    }
    lastPicked[selectedLevel] = choice;
    renderResult(choice);
}

function renderResult(activity) {
    document.getElementById("result").innerHTML = `
        You need to: ${activity}
        <span class="heart ${favorites.includes(activity) ? 'active' : ''}" 
              onclick="toggleFavorite('${activity}')">
              ${favorites.includes(activity) ? heartFilled : heartOutline}
        </span>
    `;
}

function closeIntro() {
    document.getElementById('introModal').classList.add('hidden');
}

function showIntro() {
    document.getElementById('welcomeContent').style.display = 'none';
    document.getElementById('levelInfoContent').style.display = 'block';
    document.getElementById('introModal').classList.remove('hidden');
}

function toggleFavorite(activity) {
    if (favorites.includes(activity)) {
        favorites = favorites.filter(item => item !== activity);
        showToast("Removed from favorites");
    } else {
        favorites.push(activity);
        showToast("Saved to favorites");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderResult(activity);
    renderFavorites();
    updateTopHeart();
}

function renderFavorites() {
    const favBox = document.getElementById("favoritesList");
    if (favorites.length === 0) {
        favBox.innerHTML = "<i>No favorites yet</i>";
        return;
    }
    favBox.innerHTML = favorites.map(fav => `
        <div class="fav-item">
            ${fav} 
            <span class="heart active" onclick="toggleFavorite('${fav}')">
                ${heartFilled}
            </span>
        </div>
    `).join("");
}

// Top button heart update
function updateTopHeart() {
    const topBtn = document.getElementById("showFavoritesBtn");
    topBtn.innerHTML = favorites.length > 0 ? heartFilled : heartOutline;
}

function showFavorites() {
    renderFavorites();
    document.getElementById("favoritesModal").classList.remove("hidden");
}

function closeFavorites() {
    document.getElementById("favoritesModal").classList.add("hidden");
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

// Wire buttons
window.addEventListener("DOMContentLoaded", () => {
    populateLevels();

    // Show intro on first load
    document.getElementById("welcomeContent").style.display = "block";
    document.getElementById("levelInfoContent").style.display = "none";
    document.getElementById("introModal").classList.remove("hidden");

    document.getElementById("closeWelcomeBtn").addEventListener("click", closeIntro);
    document.getElementById("closeLevelInfoBtn").addEventListener("click", closeIntro);
    document.getElementById("pickBtn").addEventListener("click", pickRandom);
    document.getElementById("showIntroBtn").addEventListener("click", showIntro);
    document.getElementById("showFavoritesBtn").addEventListener("click", showFavorites);
    document.getElementById("closeFavoritesBtn").addEventListener("click", closeFavorites);

    updateTopHeart();
});

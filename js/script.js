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
        "Write down 3 things you're grateful for", "Try a new type of exercise", "Take a different route home",
        "Make a new playlist", "Do a quick clean-up", "Try a new hobby", "Take a different route to school",
        "Make a new friend", "Do a quick workout routine", "Try a new type of cuisine", "Take a different route to the store",
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
        "Write a memoir", "Create a family tree", "Design a wedding plan", "Plan a surprise party", "Create a scavenger hunt", "Design a treasure map",
        "Write a fantasy story", "Create a sci-fi world", "Design a superhero", "Build a model airplane", "Create a diorama", "Design a cosplay outfit"

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

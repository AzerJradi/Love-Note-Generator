const loveNotes = [
    "You mean the world to me.",
    "Your smile brightens up my darkest days.",
    "I'm grateful to have you in my life.",
    "Every moment with you is special.",
    "You make my heart skip a beat.",
    "I love you more than words can express.",
    "You are my everything.",
    "Thanks for being my partner in crime.",
    "You're the reason for my happiness.",
    "I cherish every moment we spend together.",
    "N7bk 7bibi brcha wlh",
    "tw7chtk 3l5r wlh",
    "messi 5ir hihihiih",
    "nmout 3LIK",
    "Mnich msybk bhy ?"
];

function generateLoveNote() {
    const loveNoteElement = document.getElementById('loveNote');
    const randomIndex = Math.floor(Math.random() * loveNotes.length);
    loveNoteElement.textContent = loveNotes[randomIndex];
}

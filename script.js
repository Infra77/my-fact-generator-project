const funFacts = [
    "I can solve a Rubik's cube in under a minute.",
    "I have traveled to over 10 countries.",
    "I can play the guitar.",
    "I love hiking and have climbed several mountains.",
    "I am a coffee enthusiast and love trying different brews."
];

function showFunFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factElement.textContent = funFacts[randomIndex];
}

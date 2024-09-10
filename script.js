document.addEventListener("DOMContentLoaded", function () {
    const quotes = {
        science: [
            "Science is organized knowledge.",
            "The science of today is the technology of tomorrow.",
            "Science is the key to our future.",
            "The important thing in science is not so much to obtain new facts as to discover new ways of thinking about them.",
        ],
        inspiration: [
            "Believe you can and you're halfway there.",
            "The only way to do great work is to love what you do.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "The only limit to our realization of tomorrow will be our doubts of today.",
        ],
        funny: [
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "I told my computer I needed a break. Now it won't stop sending me vacation ads.",
            "Why don't scientists trust atoms? Because they make up everything!",
        ],
    };

    let currentCategory = "science";
    let currentIndex = 0;
    let currentFontSize = 16;
    const quoteElement = document.getElementById("quote");
    const categorySelect = document.getElementById("category");
    const prevBtn = document.getElementById("prevBtn");
    const randomBtn = document.getElementById("randomBtn");
    const nextBtn = document.getElementById("nextBtn");
    const modeSwitch = document.getElementById("modeSwitch");
    const decreaseFontBtn = document.getElementById("decreaseFont");
    const increaseFontBtn = document.getElementById("increaseFont");

    function updateQuote() {
        const category = categorySelect.value;
        const categoryQuotes = quotes[category];
        currentIndex = (currentIndex + categoryQuotes.length) % categoryQuotes.length;
        quoteElement.textContent = categoryQuotes[currentIndex];
    }

    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    categorySelect.addEventListener("change", function () {
        currentCategory = this.value;
        updateQuote();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
        updateQuote();
    });

    randomBtn.addEventListener("click", function () {
        currentIndex = getRandomIndex(quotes[currentCategory].length);
        updateQuote();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
        updateQuote();
    });

    modeSwitch.addEventListener("change", function () {
        const body = document.body;
        body.classList.toggle("dark-mode");
    });

    decreaseFontBtn.addEventListener("click", function () {
        currentFontSize = Math.max(12, currentFontSize - 2);
        quoteElement.style.fontSize = `${currentFontSize}px`;
    });

    increaseFontBtn.addEventListener("click", function () {
        currentFontSize += 2;
        quoteElement.style.fontSize = `${currentFontSize}px`;
    });

    updateQuote();
});
// Array of quotes
const quotes = [
  {
    quote: "The world is full of magic things, patiently waiting for our senses to grow sharper.",
    author: "W.B. Yeats"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Magic is believing in yourself. If you can do that, you can make anything happen.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    quote: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien"
  }
];

// Get DOM elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  quoteText.textContent = `"${selectedQuote.quote}"`;
  authorText.textContent = `- ${selectedQuote.author}`;
}

// Event listener
generateBtn.addEventListener("click", generateQuote);

// Optional: Show a quote when page loads
generateQuote();

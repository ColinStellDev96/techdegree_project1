// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of objects containing quote, source, citation, and year
var quotes = [
    {
        quote: "I intend to smoke a good cigar to the glory of God before I go to bed tonight.",
        source: "Charles Spurgeon",
        citation: "Metropolitan Tabernacle",
        year: 1874
    },
    {
        quote: "Always, always make the best beer possible.",
        source: "Brian Dunn",
        citation: "Great Divide Brewing",
        year: 2017
    },
    {
        quote: "It’s times like these you learn to live again.",
        source: "Foo Fighers",
        citation: "One by One",
        year: 2002
    },
    {
        quote: "Sometimes the greatest way to say something is to say nothing at all",
        source: "Justin Timberlake",
        citation: "Man of the Woods",
        year: 2018
    },
    {
        quote: "You outshined the best there was, Rewrote who I could be, When I held you for the first time I knew I had to survive",
        source: "Converge",
        citation: "The Dusk in Us",
        year: 2017
    },
];
// console.log(quotes);

// global, empty variable to hold random quote
var randomQuote;

function getRandomQuote (array) {
    randomQuote = array[Math.floor(Math.random() * array.length)];
    return randomQuote;
};

console.log(getRandomQuote(quotes));


 
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of objects containing quote, source, citation, and year
var quotes = [
    {
        quote: "I intend to smoke a good cigar to the glory of God before I go to bed tonight.",
        source: "Charles Spurgeon",
        citation: '',
        year: 1874
    },
    {
        quote: "Always, always make the best beer possible.",
        source: "Brian Dunn",
        citation: "Great Divide Brewing",
        year: ''
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
        quote: "When I held you for the first time I knew I had to survive",
        source: "Converge",
        citation: "The Dusk in Us",
        year: 2017
    },
];
// console.log(quotes);

// function that takes an array, and selects a random object from that array.
function getRandomQuote () {
    //variable that creates a random number using the quotes arra
    randomQuote = Math.floor(Math.random() * quotes.length);
    //returns the random quote selected
    return quotes[randomQuote];
};
console.log(getRandomQuote());

function printQuote () {
    //calls getRandomQuote function and assigns selected quote to new variable
    var printText = getRandomQuote();
    // varialbe that prints 
    var newQuotePrint = '<p class="quote">' + printText.quote + '</p>' + '<p class="source">' + printText.source  + '<span class="citation">' + printText.citation + '</span>' + '<span class="year">' + printText.year + '</span>'+'</p>';
    if (printText.citation === '') {
        newQuotePrint = '<p class="quote">' + printText.quote + '</p>' + '<p class="source">' + printText.source + '<span class="year">' + printText.year + '</span>'+'</p>';
    } if (printText.year === '') {
        newQuotePrint = '<p class="quote">' + printText.quote + '</p>' + '<p class="source">' + printText.source + '<span class="citation">' + printText.citation + '</span>'+'</p>';
    }
    document.getElementById('quote-box').innerHTML = newQuotePrint;
};

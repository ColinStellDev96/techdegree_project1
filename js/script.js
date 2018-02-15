// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//array of objects containing quote, source, citation, year, and tag
var quotes = [
    {
        quote: "I intend to smoke a good cigar to the glory of God before I go to bed tonight.",
        source: "Charles Spurgeon",
        year: 1874,
        tag: "Old Theologians"
    },
    {
        quote: "Always, always make the best beer possible.",
        source: "Brian Dunn",
        citation: "Great Divide Brewing",
        tag: "Beer"
    },
    {
        quote: "It’s times like these you learn to live again.",
        source: "Foo Fighers",
        citation: "One by One",
        year: 2002,
        tag: "Music"
        
    },
    {
        quote: "Sometimes the greatest way to say something is to say nothing at all",
        source: "Justin Timberlake",
        citation: "Man of the Woods",
        year: 2018,
        tag: "Music"
    },
    {
        quote: "When I held you for the first time I knew I had to survive",
        source: "Converge",
        citation: "The Dusk in Us",
        year: 2017,
        tag: "Music"
    },
];

var colors = ['#fc053a', '#147ad6', '#f77c18', '#d80896', '#bb8b49'];

var repeatQuotes = [];
var repeatColors = [];

// function that takes an array, and selects a random object from that array.
function getRandomQuote () {
    randomQuote = Math.floor(Math.random() * quotes.length); //variable that creates a random number using the quotes array
    quoteSplice = quotes.splice(randomQuote, 1)[0]; //splice randomQuote object, 1 is the index value the splice stops at, [0] indicates access of the first item in the array
    repeatQuotes.push(quoteSplice); //pushing each random quote into the global repeatQuotes array which starts as an empty array, but populates as the getRandomQuote function is called.
    if (quotes.length === 0) {
        quotes = repeatQuotes;
        repeatQuotes = []; // this logic allows us to start over again once all the quotes have been viewed
    }
    return quoteSplice;
};

function getRandomColor () {
    randomColor = Math.floor(Math.random() * colors.length);
    colorSplice = colors.splice(randomColor, 1)[0];
    repeatColors.push(colorSplice);
    if (colors.length === 0) {
        colors = repeatColors;
        repeatColors = [];
    }
    return colorSplice;
};

function printQuote () {
    //calls getRandomQuote function and assigns selected quote to new variable
    var printText = getRandomQuote();
    var newColor = getRandomColor();
    // varialbe that prints object values in HTML based on class.
    var newQuotePrint = '<p class="quote">' + printText.quote + '</p>' + '<p class="source">' + printText.source  + '<span class="citation">' + printText.citation + '</span>' + '<span class="year">' + printText.year + '</span>'+ '<span class="tag">' + printText.tag + '</p>';
    //if citation is undefined, print in HMTL doesn't include that value without breaking CSS
    if (printText.citation === undefined) {
        newQuotePrint = '<p class="quote">' + printText.quote + '</p>' + '<p class="source">' + printText.source + '<span class="year">' + printText.year + '</span>'+ '<span class="tag">' + printText.tag + '</p>';
         //if year is undefined, print in HMTL doesnt include that value that value without breaking CSS
    } if (printText.year === undefined) {
        newQuotePrint = '<p class="quote">' + printText.quote + '</p>' + '<p class="source">' + printText.source + '<span class="citation">' + printText.citation + '</span>'+ '<span class="tag">' + printText.tag + '</p>';
    }
    document.getElementById('quote-box').innerHTML = newQuotePrint;
    document.body.style.backgroundColor = newColor;
};

window.setInterval(printQuote, 30000);

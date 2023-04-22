var quotes = [
    { quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
    { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    { quote: "“So many books, so little time.”", author: "Frank Zappa" },
    { quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", author: "Marilyn Monroe" },
    { quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "Albert Einstein" }
];


function getQuote() {

    // Generate a random number between 0 and the last index of the array. 
    var randomNumber = Math.floor(Math.random() * quotes.length);


    var randomQuote = quotes[randomNumber];
    console.log(randomQuote)


    document.getElementById('quote').innerHTML = randomQuote.quote;
    document.getElementById('author').innerHTML = randomQuote.author;

}




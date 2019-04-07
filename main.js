document.getElementById('new-quote').addEventListener('click', displayQuotes);
document.body.onload = displayQuotes;

let randomQuote = (input) => Math.floor(Math.random() * input);

let text;
let author;

function displayQuotes() {

    fetch('quotes.json')
        .then((res) => res.json())
        .then((data) => {
            let randomIndex = randomQuote(data.quotes.length);
            text = data.quotes[randomIndex].quote;
            author = data.quotes[randomIndex].author;

            let output = `
                <img src="${data.quotes[randomIndex].image}">
                <p id="text">${text}</p>
                <p id="author">- ${author}</p>
            `;
            document.getElementById('quotes').innerHTML = output;
        });
}

function tweetQuote() {
    setTimeout(() => {
        location.href=`http://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(text) + " - " + encodeURIComponent(author)}&via=therealkirubiel`;
    }, 50);
}

document.getElementById('tweet-quote').addEventListener('click', tweetQuote);
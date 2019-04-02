document.getElementById('button').addEventListener('click', displayStuff);

function displayStuff() {
    fetch('quotes.json')
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('p').innerHTML = data.quotes[0].quote;
            document.getElementById('anotherP').innerHTML = data.quotes[0].author;
            document.getElementById('imgBackground').style.backgroundImage = `url(${data.quotes[0].image})`;
        })
}
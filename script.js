function getQuotes() {
    // reference: https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373
    const quotes = document.getElementById("quotes-data");
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quotes.innerHTML = JSON.stringify(data[0].text);
        });
        getJokes();
}

function getJokes() {
    // reference: https://api.chucknorris.io/jokes/random
    const jokes = document.getElementById("jokes-data");
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            jokes.innerHTML = JSON.stringify(data.value);
        });
}


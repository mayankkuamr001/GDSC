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
}
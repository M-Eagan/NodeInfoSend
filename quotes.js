let quote = ["Show me the money!", "Hasta la vista, baby","This is Sparta!", "Bond, James Bond", "May the Force be with you"];


module.exports.movieQuotes = function quoteGenerator() {
    return quote[Math.floor(Math.random() * quote.length)];
};



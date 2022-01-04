'use strict';
const quotes = [
    { quote: " The events in our lives happen in a sequence in time, but in their significance to ourselves they find their own order the continuous thread of revelation. ", author: 'Eudora Welty' },

    { quote: " I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom. ", author: 'Rosa Parks' },

    { quote: " I have very strong feelings about how you lead your life. You always look ahead, you never look back. ", author: 'Ann Richards' },
    { quote: " Never lose sight of the face that the most important yard stick to your success is how you treat other people. ", author: 'Arbara Bush' },

    { quote: " All your life, you will be faced with a choice. You can choose love or hate…I choose love. ", author: 'Johnny Cash' }
]

setInterval(() => {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    let quoteOutput = document.getElementById("quote");
    let authorOutput = document.getElementById("author");
    quoteOutput.innerHTML = random.quote;
    authorOutput.innerHTML = random.author;
}, 5000);
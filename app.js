const newQuote = document.querySelector("#new-quote")
const person = document.querySelector(".person")
const quote = document.querySelector(".quote")

const quotes = [{
    quote : "What is evil?-Whatever springs from weakness.",
    person : "Friedrich Wilhelm Nietzsche"
},{
    quote : "Orators are most vehement when they have the weakest cause, as men get on horseback when they cannot walk.",
    person : "Cicero"
}, {
    quote: "The weak and insipid white wine makes at length excellent vinegar.",
    person: "William Shenstone"
}, {
    quote: "If any man is rich and powerful he comes under the law of God by which the higher branches must take the burnings of the sun, and shade those that are lower; by which the tall trees must protect the weak plants beneath them.",
    person: "Henry Ward Beecher"
},{
    quote: "Nothing in the world is more haughty than a man of moderate capacity when once raised to power.",
    person: "Baron Wessenburg"
},{
    quote: "Teach self-denial and make its practice pleasure, and you can create for the world a destiny more sublime that ever issued from the brain of the wildest dreamer.",
    person: "Sir Walter Scott"
},];

newQuote.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
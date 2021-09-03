const quotes = [
    {
    quote:"hurry doesn't make it quick.",
    author:"Hoo",
    },
    {
    quote:"Take your time. Obsession doesn't help.",
    author:"Hoo",
    },
    {
    quote:"If that bothers you, then stop it.",
    author:"Hoo",
    },
    {
    quote:"Take it as it is.",
    author:"Hoo",
    },
    {
    quote:"Admit that you're not good enough.",
    author:"Hoo",
    },
    {
    quote:"You can't play timidly.",
    author:"Hoo",
    },
    {
    quote:"Don't try to be too good.",
    author:"Hoo",
    },
    {
    quote:"Never mind. Ignore it.",
    author:"Hoo",
    },
    {
    quote:"Don't argue.",
    author:"Hoo",
    },
    {
    quote:"You can think about it then.",
    author:"Hoo",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

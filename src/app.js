//const Sort = require("./Sort");
const canvas = require("./canvas");
require("./index.css");

//const sort = new Sort();
//sort.sort();

function createCheesyTitle(slogan) {
  const container = document.createElement("h1");
  const textNode = document.createTextNode(slogan);
  container.appendChild(textNode);
  return container;
}

const title = createCheesyTitle("Insertion Sort Step by Step");
document.getElementById("title").appendChild(title);

function changeTitle(event) {
  event.preventDefault();
}

const form = document.querySelector("form");
document.addEventListener("DOMContentLoaded", () => {
  form.onsubmit = changeTitle;
});

const next = document.getElementById("btn-start");
next.addEventListener("click", () => {
  canvas.start();
  canvas.main();
});

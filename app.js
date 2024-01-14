// console.log("Hello world!");

const body = document.querySelector("body");
console.log(body);

// const h1 = document.querySelector("h1");
//console.log(h1);

// const h1 = document.createElement("h1");
// h1.textContent = "Document Object Model";
// body.appendChild(h1);

function createList(item) {
  const list = document.createElement("li");
  const listItem = document.createTextNode(item);
  list.appendChild(listItem);
  document.querySelector("ul").appendChild(list);
}

createList("Malteaser");
createList("Headphones");
createList("Mouse");

const h1 = document.querySelector("h1");
h1.remove();

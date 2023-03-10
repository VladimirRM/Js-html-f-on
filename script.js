const div = document.createElement("div");
const header = document.createElement("h1");
header.textContent = " Learn js";
div.appendChild(header);
const a = document.createElement("a");
a.href = "https://www.ukr.net";
a.textContent = "Ukr.net";
document.body.appendChild(a)

document.body.appendChild(div);

console.log(div);
console.log(header);
console.log(a);

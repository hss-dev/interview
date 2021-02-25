const mainElement = document.getElementById("app");

mainElement.innerHTML = `
<h1>Hello Adam</h1>
<div>
  How can you change this to make the 
  <a href="http://rssnest.epizy.com/">link</a> work?
  <br>
  <br>
</div>
`;

const text = "This string has a http://www.google.co.uk link in it";

const newText = function (toChange) {
  return toChange + "";
};

const anotherElement = document.createElement("div");
anotherElement.innerHTML = newText(text);
anotherElement.style = "color:red";

mainElement.appendChild(anotherElement);
let myName = "Alex";
console.log(myName);

//this function logs a line of text in the browser log
console.log("hello world!")

// let means there is a variable that can change. IE myHeading was in h1, but I can change it to h2

// this function changes the heading in... console?

function init() {
  changeHeading();
  greeting();
  button1();
}

function changeHeading() {
  let myHeading = document.querySelector('h1');
  myHeading = document.querySelector('h2')
  myHeading.textContent = 'Hello world!';
  console.log(myHeading)
}

function greeting() {
  const para = document.createElement("p");
  para.innerText = myName;
  document.body.appendChild(para);
}

function button1() {
  const btn = document.createElement("button");
  btn.innerHTML = "bottom button";
  document.body.appendChild(btn);
}



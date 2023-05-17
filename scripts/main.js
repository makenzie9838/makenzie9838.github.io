const myImage = document.querySelector("img");

//switches image on each click with the relevant alert
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG-0906.jpg") {
    myImage.setAttribute("src", "images/IMG-3864.jpg");
    alert("Unrelated image but that's Carla Bruni featured in the Thierry Mugler: Couturissime Exhibit!");
  } else {
    myImage.setAttribute("src", "images/IMG-0906.jpg");
    alert("This is the correct image!");
  }
};

let myButton = document.querySelector("button");

//click event for button to set username
myButton.onclick = () => {
  setUserName();
};

//function to set username
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      alert(`Hello there, ${myName}!`);
    }
  }

//sets username or welcomes user depending on what is in local storage
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    alert(`Welcome back, ${storedName}!`);
  }

//initializes variables for unordered list, list name, description and selects the html file
const list = document.createElement('ul');
const listName = document.createElement('h3');
const listDescription = document.createElement('p');
const html = document.querySelector('html');

//names the list and describes how the list is used
listName.textContent = 'Dynamic To-Do List';
listDescription.textContent = 'Click anywhere to add a new task to the list. Click an existing task to change it.'

//adds those variables to the document
document.body.appendChild(listName);
document.body.appendChild(listDescription);
document.body.appendChild(list);

//click events to add or change items in the list
html.onclick = () => {
  const listItem = document.createElement('li');
  const listContent = prompt('What do you have to do today?');
  if (listContent) {
    listItem.textContent = listContent;
    list.appendChild(listItem);
  }

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('What else do you have to do today?');
    if (listContent) {
      this.textContent = listContent;
    }
  }
}


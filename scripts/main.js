const myImage = document.querySelector("img");

//switches image on each click with the relevant alert
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/00-zippers.jpg") {
    myImage.setAttribute("src", "images/carla-bruni-mugler.jpg");
    alert("Unrelated image but that's Carla Bruni featured in the Thierry Mugler: Couturissime Exhibit!");
  } else {
    myImage.setAttribute("src", "images/00-zippers.jpg");
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

//initializes variables for list to act as a comment section
const list = document.createElement('ul');
const listName = document.createElement('h3');
const listDescription = document.createElement('p');

//adds text for users to understand how the comment section works
listName.textContent = 'Comments';
listDescription.textContent = 'Click Comments to add one. Click an existing comment to edit it.'

//adds the comment section to the bottom of the "post"
const post00 = document.getElementById("00");
post00.appendChild(listName);
post00.appendChild(listDescription);
post00.appendChild(list);

//click events to add or change comments
listName.onclick = () => {
  const listItem = document.createElement('li');
  const listContent = prompt('Leave a comment...');
  if (listContent) {
    listItem.textContent = listContent;
    list.appendChild(listItem);
  }

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Editing comment...');
    if (listContent) {
      this.textContent = listContent;
    }
  }
}


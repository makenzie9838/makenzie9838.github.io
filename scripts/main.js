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

//initializes variables for list to act as a comment section
const list = document.createElement('ul');
const listName = document.createElement('h3');
const listDescription = document.createElement('p');
const html = document.querySelector('html');

//adds text for users to understand how the comment section works
listName.textContent = 'Comments';
listDescription.textContent = 'Click anywhere to add a new comment. Click an existing comment to edit it.'

//adds the comment section to the bottom of the "post"
const endOf00 = document.getElementById("end-Of-00");
endOf00.appendChild(listName);
endOf00.appendChild(listDescription);
endOf00.appendChild(list);

//click events to add or change comments
html.onclick = () => {
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


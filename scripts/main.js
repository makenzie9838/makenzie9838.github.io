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

//adds the comment section to the bottom of each article but lost click events
let articles = document.querySelectorAll('article');
for (let i = 0; i < articles.length; i++) {
  const commentSection = document.createElement('ul');
  const commentTitle = document.createElement('h3');
  const commentDescription = document.createElement('p');
  commentTitle.textContent = 'Comments';
  commentDescription.textContent = 'Click Comments to add one. Click an existing comment to edit it.'
  articles[i].appendChild(commentTitle);
  articles[i].appendChild(commentDescription);
  articles[i].appendChild(commentSection); 
}

//managed to add click event for all commentTitles based on h3 tag
  //but lost ability to actually add the comment to the comment section and etc. ...
let commentTitles = document.querySelectorAll('h3');

let clickEvent = () => {
    const comment = document.createElement('li');
    const commentContent = prompt('Leave a comment...');
    if (commentContent) {
      comment.textContent = commentContent;
      alert(`${comment.textContent}`);
      commentSection.appendChild(comment);
    }
}

commentTitles.forEach(title => {
    title.addEventListener('click', clickEvent)
});

// listName.onclick = () => {
//   const listItem = document.createElement('li');
//   const listContent = prompt('Leave a comment...');
//   if (listContent) {
//     listItem.textContent = listContent;
//     list.appendChild(listItem);
//   }

//   listItem.onclick = function(e) {
//     e.stopPropagation();
//     const listContent = prompt('Editing comment...');
//     if (listContent) {
//       this.textContent = listContent;
//     }
//   }
// }


const myImage = document.querySelector("img");

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
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      alert(`Hello there, ${myName}!`);
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    alert(`Welcome back, ${storedName}!`);
  }

myButton.onclick = () => {
    setUserName();
};

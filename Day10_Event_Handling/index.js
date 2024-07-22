// Activity 1
// Task 1
const imAButton = document.getElementsByClassName("button")[0];

imAButton.addEventListener("click", () => {
  document.querySelector("#para").innerHTML = "para content has been changed!";
});

// Task 2
const imAImage = document.querySelector("#img");

imAImage.addEventListener("dblclick", () => {
  if (imAButton.style.visibility === "visible") {
    imAButton.style.visibility = "hidden";
  } else {
    imAButton.style.visibility = "visible";
  }
});

// Activity 2
// Task 3
const paragraph = document.querySelector("#para");

paragraph.addEventListener("mouseover", () => {
  paragraph.style.backgroundColor = "yellow";
});

// Task 4
paragraph.addEventListener("mouseout", () => {
  paragraph.style.backgroundColor = "";
});

// Activity 3
// Task 5
const input = document.querySelector(".inputBox");

input.addEventListener("keydown", function (event) {
  console.log(event.key);
});

// Task 6
const inputanother = document.querySelector(".inputBox");

inputanother.addEventListener("keydown", function (event) {
  const para = document.querySelector("#para");
  para.innerHTML = event.key;
});

// Activity 4
//Task 7
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("submit", (event) => {
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  event.preventDefault();
  console.log(email);
  console.log(password);
});

//Task 8

const dropDown = document.querySelector(".animeDropdown");
const para = document.querySelector("#para");

dropDown.addEventListener("click", (e) => {
  const optionSelected = e.target.value
  para.innerHTML = optionSelected;
});

// Activity 10 
// Task 9 

const list = document.querySelector("#unorderedList")
list.addEventListener("click" , (e)=>{
    if (e.target && e.target.nodeName === "LI") {
        console.log(e.target.innerHTML);
    }
})

//Task
const parent  = document.querySelector(".parent")
const addElement  = document.querySelector(".addElement")


addElement.addEventListener("click" , ()=>{
const child = document.createElement("div")
child.innerHTML = "children" 

parent.appendChild(child)

})
// Activity 1
// Task 1
document.getElementById("myElement").innerHTML = "Updated Content";

// Task 2
document.getElementsByClassName("bgColorChange")[0].style.backgroundColor =
  "red";

// Activity 2
// Task 3
const newDiv = document.createElement("div");
newDiv.innerHTML = "im a cute little div";
document.body.appendChild(newDiv);

//Task 4
const newUnorderList = document.createElement("ul");


document.body.appendChild(newUnorderList);
const newlist = document.createElement("li");
newlist.innerHTML = "Bmw";
const newlistTwo = document.createElement("li");
newlistTwo.innerHTML = "Audi";
const newlistThree = document.createElement("li");
newlistThree.innerHTML = "Mercedes";

newUnorderList.appendChild(newlist);
newUnorderList.appendChild(newlistTwo);
newUnorderList.appendChild(newlistThree);

// Activity 3
// Task 5
document.querySelector("#myElement").remove();

// Task 6
document.querySelector(".ulList").lastElementChild.remove();

// Activity 4
// Task 7
document
  .querySelector("#image")
  .setAttribute(
    "src",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/yoriichi-demon-slayer.jpg"
  );

// Task 8  
const css = document.querySelector(".button")
css.classList.add("")
css.classList.add("highlight")

// Activity 5  
// Task 9
const clicked = document.querySelector(".button");
clicked.addEventListener("click", () => {
  document.querySelector(".para").innerHTML = "this para changes now!";
});

// Task 10
button = document.querySelector(".button")

button.addEventListener("mouseover" ,() => {
    button.style.borderColor = "blue"
})
function logicalOperaterOne(userAge) {
  if (userAge > 20 && userAge == 21) {
    console.log("Both condition meet");
  } else {
    console.log("One or both the condition didnt meet");
  }
}

logicalOperaterOne(21);

function logicalOperaterTwo(ratingStar) {
  if (ratingStar % 2 == 0 || ratingStar < 4) {
    console.log("One or both condition meet");
  } else {
    console.log("Both condition failed");
  }
}

logicalOperaterTwo(4);

function logicalOperaterThree(userName) {
  if (userName == "Neeraj") {
    console.log("true");
  } else {
    console.log("false");
  }
}

logicalOperaterThree("Neeraj");

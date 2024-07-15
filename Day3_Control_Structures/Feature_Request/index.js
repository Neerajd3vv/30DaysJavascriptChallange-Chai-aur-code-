// 1 //
function numberCheck(num) {
  if (num > 0) {
    console.log("positive");
  } else if (num == 0) {
    console.log("Zero");
  } else if (num < 0) {
    console.log("negative");
  }
}

numberCheck(0);

// 2 //

function votingEligiblity(voterAge) {
  if (voterAge >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

votingEligiblity(16);

// 3 //

function weekScript(randomNum) {
  let weekDay;
  switch (randomNum) {
    case 1:
      weekDay = "sunday";
      break;
    case 2:
      weekDay = "monday";
      break;
    case 3:
      weekDay = "tuesday";
      break;
    case 4:
      weekDay = "wednesday";
      break;
    case 5:
      weekDay = "thursday";
      break;
    case 6:
      weekDay = "friday";
      break;
    case 7:
      weekDay = "saturday";
      break;
  }

  console.log(weekDay);
}

weekScript(2);

// 4 //
function Grade(score) {
  let grade;
  switch (true) {
    case score >= 95:
      grade = "A+";
      break;
    case score >= 85:
      grade = "A";
      break;
    case score >= 75:
      grade = "B+";
      break;
    case score >= 65:
      grade = "B";
      break;
    case score >= 55:
      grade = "C";
      break;
    default:
      grade = "f";
  }

  console.log(`student score: ${score} and grade: ${grade} `);
}

Grade(2);

// 5 //

function leapYearCheck(year) {
  if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

leapYearCheck(2032);

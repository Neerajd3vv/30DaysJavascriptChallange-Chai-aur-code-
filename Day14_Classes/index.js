// Activity 1 Class defination
// Task 1
class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  // Greet method
  greet() {
    console.log(`Hello ${this.name}`);
  }

  update(newAge) {
    const updatedAge = (this.age = newAge);
    console.log(updatedAge);
  }
}

const personOne = new Person("Neeraj", 22);
console.log(personOne);

// Task 2
personOne.update(21);

// Activity 2 Class inheritance

// Task 3
class Student extends Person {
  constructor(age, name, studentId) {
    super(age, name);
    this.studentId = studentId;
  }

  getStudentId() {
    console.log("userId", this.studentId);
  }
  greet() {
    console.log(`Hello ${this.name} your studentID is ${this.studentId}`);
  }
}

const studentOne = new Student(20, "Rahul" , 100)

console.log(studentOne.getStudentId);
studentOne.getStudentId()

// Task 4
studentOne.greet()

// Activity 3  static method we can declare it on class it self . not on the instance of class

// Task 5

class PersonTwo {
  // static method
  static greet(name) {
    console.log(`Namaste ${name}`);
  }
}

PersonTwo.greet("Neeraj");
// Task 6

class Students {
  static studentCreatedCount = 0;
  constructor(name, school) {
    this.name = name;
    this.school = school;

    Students.studentCreatedCount++;
    console.log(`${Students.studentCreatedCount} times student created`);
  }
}

const studentFirst = new Students("surya", "ratanjee modern school");

const studentSecond = new Students("rahul", "ratanjee modern school");

const studentThird = new Students("neeraj", "ratanjee modern school");

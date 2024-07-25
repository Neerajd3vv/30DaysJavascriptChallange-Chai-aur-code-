const { name, age, greetUser, bol } = require("./index");

function full () {
    console.log("Name" ,name);
    console.log("Age",age);
    greetUser(name)
    bol(name)
}
full()
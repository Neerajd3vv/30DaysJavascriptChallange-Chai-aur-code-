function ReassignmentDemo() {
  let address = "New delhi";
  console.log(address);
  address = "Mumbai";
  console.log(address);

  const email = "test@google.com";
  try  {
  email= "TestTwo@gmail.com"
  } catch (error) {
console.log({"Cannot resassign varible declared with const": error});
  }
  console.log(email);
  email = "testTwo@gmail.com";
  console.log(email);
}

ReassignmentDemo()

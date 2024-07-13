function VariableTypesConsoleLog() {
  //   ++++ Primitive datatypes ++++
  const age = 21;
  const name = "Neeraj";
  const above18 = true;

  // BigInt let us declare integer bigger than maxmimum safe integer limit
  const bigNumber = BigInt(1234567890123456789012345678901234567890);
  const MyBrainPower = null;

  // Symbol gives unique identification to property keys of object . Both below is different
  const uniqueobjectKey_Age = Symbol("imUnique");
  const uniqueobjectKey2_Email = Symbol("imUnique");

  //   ++++ Non - Primitive datatypes +++++
  const userInfo = {
    name: "Neeraj",
    uniqueobjectKey_Age: 21,
    uniqueobjectKey2_Email: "test@gmail.com",
  };

  return (
    console.log(age),
    console.log(typeof age),
    console.log(name),
    console.log(typeof name),
    console.log(above18),
    console.log(typeof above18),
    console.log(bigNumber),
    console.log(typeof bigNumber),
    console.log(MyBrainPower),
    console.log(typeof MyBrainPower),
    console.log(uniqueobjectKey_Age),
    console.log(typeof uniqueobjectKey_Age),
    console.log(uniqueobjectKey2_Email),
    console.log(typeof uniqueobjectKey2_Email),
    console.log(userInfo),
    console.log(typeof userInfo)
  );
}

console.log(VariableTypesConsoleLog());
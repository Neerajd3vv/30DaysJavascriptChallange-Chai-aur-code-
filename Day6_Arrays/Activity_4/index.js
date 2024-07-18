const upperMoons = ["kokoshibo" ,"doma" ,"akaza" ,"hantengu" ,"gyokko"]

for (let index = 0; index < upperMoons.length; index++) {
    const eachElement = upperMoons[index]
    console.log("for loop:",eachElement);

    
}

upperMoons.forEach((x) => {
    console.log("for each:",x);
})
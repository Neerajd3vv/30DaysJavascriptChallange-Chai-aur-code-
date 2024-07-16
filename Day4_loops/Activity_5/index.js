for (let index = 0; index <= 10 ; index++) {
    if (index == 5) {
        continue
    } 
    console.log(index);
}

for (let index = 0; index <= 10 ; index++) {
    if (index == 7) {
        break
    } 
    console.log(index);
}
const book = {
    title : "Mindset",
    author : "Dr. carol's dweck",
    publishedYear: 2022

}



// for in loop return a key that can be used to access property of object
for (const  key in book) {
    if (book.hasOwnProperty(key)) {
        const keys = key
        const value = book[key]
        console.log(` key: ${keys}  value: ${value}`);
    }

}

console.log(Object.keys(book));
console.log(Object.values(book));
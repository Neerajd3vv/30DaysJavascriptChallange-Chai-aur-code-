const book = {
    title : "Mindset",
    author : "Dr. carol's dweck",
    publishedYear: 2022

}

book.valueString = function ()  {
    // return `${this.title} Author- ${this.author}`
    const result = `${this.title} Author- ${this.author} `
    console.log(result);
}

book.valueString()

book.Updateyear = function (newYear) {
    console.log("Current year : " , this.publishedYear);
    console.log( "Updated publish year:" ,this.publishedYear =  newYear
    ); 

}

book.Updateyear(2021)
function frOne (title , authorname , year) {
    const book = {
        title : title,
        author : authorname,
        year : year
    }

    book.taMehthod = function () {
        console.log(`Book title : ${this.title} Book author: ${this.author} `);
    }

    book.taMehthod()

    book.changeYeat = function (year) {
        console.log(this.year = year);
        console.log(book);
    }

    book.changeYeat(2020)


}
// frOne("mindset" , "xyz" , 2021)

function frTwo () {
    const library = {
        name: "Mastisk library",
        books: [
          {
            author: "neitzche",
            title: "god id dead",
            year: 1980,
          },
          {
            author: "plato",
            title: "the republic",
            year: 1960,
          },
        ],
      };

      console.log(library);
      console.log(library.books.map((x) => x.title));
}

// frTwo()

function frThree () {
    const book = {
        title : "Mindset",
        author : "Dr. carol's dweck",
        publishedYear: 2022
    
    }

    for ( const key in book) {
        console.log(`key : ${key} , value: ${book[key]}`);
    }

    console.log(Object.keys(book));
    console.log(Object.values(book));
}

frThree()
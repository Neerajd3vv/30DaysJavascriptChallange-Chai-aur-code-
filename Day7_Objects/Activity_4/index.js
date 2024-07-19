const book = {
    title : "Mindset",
    author : "Dr. carol's dweck",
    publishedYear: 2022

}

book.neerajMethod = function () {
    console.log(` Book title: ${this.title } & Book publish year: ${this.publishedYear}`);
}

book.neerajMethod()
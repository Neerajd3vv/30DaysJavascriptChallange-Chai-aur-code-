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

console.log(library.name);
console.log(library.books.map((x) => x.title));

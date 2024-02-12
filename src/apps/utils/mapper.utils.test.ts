import { transformData, filterData } from "./mapper.utils";

describe("transformData", () => {
  it("transforms library data into books, authors, and pages array", () => {
    const libraryData = [
      {
            "book":{
               "title":"El Señor de los Anillos",
               "pages":1200,
               "genre":"Fantasía",
               "cover":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
               "synopsis":"Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
               "year":1954,
               "ISBN":"978-0618640157",
               "author":{
                  "name":"J.R.R. Tolkien",
                  "otherBooks":[
                     "El Hobbit",
                     "El Silmarillion"
                  ]
               }
            }
         },
     {
            "book":{
               "title":"El Señor de los Anillos",
               "pages":1200,
               "genre":"Fantasía",
               "cover":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
               "synopsis":"Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
               "year":1954,
               "ISBN":"978-0618640157",
               "author":{
                  "name":"J.R.R. Tolkien",
                  "otherBooks":[
                     "El Hobbit",
                     "El Silmarillion"
                  ]
               }
            }
         },
    ];
    const favoriteBooks = [{ id: "1",date:"2022-01" }, { id: "2",date:"2022-01" }]; // Simulated favorite books

    const { ebooks, authors, pag } = transformData(libraryData, favoriteBooks);

    // Verify that the books have been transformed correctly
    expect(ebooks.length).toEqual(2);

    // Verify that the authors have been extracted correctly
    expect(authors.length).toEqual(2);
    // Verify that the authors have been extracted correctly
    expect(pag.length).toEqual(2);
  });
});

describe("filterData", () => {
  it("filters books based on filter criteria", () => {
  
    const filteredBooks = filterData([], { author: "Author 1", pages: 150 });

    // Verify that the books are filtered correctly according to the provided criteria
    expect(filteredBooks.length).toEqual(0);
  });
});

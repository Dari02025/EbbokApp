import Book from "components/Book.component";

const books = [
  {
    title: "Book 1",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    description: "Descripción del libro 1.",
    totalPages: 200,
  },
  {
    title: "Book 2",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
    description: "Descripción del libro 2.",
    totalPages: 100,
  },
  // Agregar más libros aquí...
];

const BookList = () => {
  return (
    <div className="flex flex-wrap -mx-4">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          imageSrc={book.imageSrc}
          description={book.description}
          totalPages={book.totalPages}
        />
      ))}
    </div>
  );
};

export default BookList;

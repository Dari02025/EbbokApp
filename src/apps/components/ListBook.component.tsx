import Book from "components/Book.component";
import { Book as BookInterface } from "../interfaces/ebook.interface";

const BookList = ({ books }: { books: BookInterface[] }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          imageSrc={book.cover}
          description={book.synopsis}
          genere={book.genre}
          id={book.ISBN}
          favorite={book?.isFavorite}
        />
      ))}
    </div>
  );
};

export default BookList;

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getBooks } from "~/models/books.server";

import { Book } from "~/routes/books/Book";

import { bookType } from "~/routes/books/types";

export const loader = async () => {
  const books = await getBooks();

  return json(books);
};

export default function BooksIndex() {
  const books = useLoaderData();

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">Books</h1>

      <ul className="mt-8">
        {books.map((book: bookType) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

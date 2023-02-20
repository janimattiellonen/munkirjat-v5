import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getBooks } from "~/models/books.server";

import { BookItem } from "~/routes/books/BookItem";

import { bookDTO } from "~/routes/books/types";

export const loader = async () => {
  const books = await getBooks();

  return json(books);
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">An unexpected error occurred</h1>

      <p>{error.message}</p>
    </div>
  );
}

const split = (books: bookDTO[]): [bookDTO[], bookDTO[]] => {
  const firstColumnSize = Math.ceil(books.length / 2);

  const secondColumnSize = books.length - firstColumnSize;

  return [
    [...books].splice(0, firstColumnSize),
    [...books].splice(firstColumnSize, secondColumnSize),
  ];
};

export default function IndexPage() {
  const books = useLoaderData();

  const columns = split(books);

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">Books</h1>

      <div className="grid grid-cols-2 gap-4">
        {columns.map((item, index) => (
          <ul key={`column-${index}`} className="mt-8">
            {item.map((book: bookDTO) => (
              <li key={book.id}>
                <BookItem book={book} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

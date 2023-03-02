import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getBooks } from "~/models/books.server";

import { getStats } from "~/models/stats.server";

import { BookItem } from "~/routes/books/BookItem";

import { bookDTO } from "~/routes/books/types";

import { Stats } from "~/components/Stats";

export const loader = async () => {
  const books = await getBooks();

  const stats = await getStats();

  return json({ books, stats });
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
  const { books, stats } = useLoaderData();

  const columns = split(books);

  console.info(`STATS: ${JSON.stringify(stats, null, 2)}`);

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">Books</h1>

      <div className="grid grid-cols-3 gap-4">
        {columns.map((item, index) => (
          <ul key={`column-${index}`} className="mt-8">
            {item.map((book: bookDTO) => (
              <li key={book.id}>
                <BookItem book={book} />
              </li>
            ))}
          </ul>
        ))}
        <Stats stats={stats} />
      </div>
    </div>
  );
}

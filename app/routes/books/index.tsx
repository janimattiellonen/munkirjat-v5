import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {getBooks} from "~/models/books.server";
import type from "ajv/lib/vocabularies/jtd/type";

export const loader = async () => {
  const books = await getBooks();

  return json(books)
}

export default function BooksIndex() {
  const books = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Books</h1>

      {books.map ((book) => <li>{book.id}: {book.title}</li>)}
    </div>
  );
}

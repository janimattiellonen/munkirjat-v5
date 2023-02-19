import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAuthor } from "~/models/authors.server";
import { getBooksByAuthor } from "~/models/books.server";

import { authorDTO, bookDTO } from "~/routes/books/types";

export const loader = async ({ params }: LoaderArgs) => {
  const author = await getAuthor(parseInt(params?.authorId || "", 10));

  if (!author) {
    throw new Response("Author not Found", { status: 404 });
  }

  const authorBooks = await getBooksByAuthor(
    parseInt(params?.authorId || "", 10)
  );

  console.info(`authorBooks223, count: ${authorBooks.length}`);

  return json({ author, authorBooks });
};
/*
export const authorBooksLoader = async ({ params }: LoaderArgs) => {
  const authorBooks = await getBooksByAuthor(
    parseInt(params?.authorId || "", 10)
  );

  return json(authorBooks);
};
*/
export default function AuthorPage() {
  const { author, authorBooks }: { author: authorDTO; authorBooks: bookDTO[] } =
    useLoaderData();
  //  const books: bookDTO[] = useLoaderData<typeof authorBooksLoader>();

  console.info(`author: ${JSON.stringify(author, null, 2)}`);

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">
        {author.firstName} {author.lastName}
      </h1>

      {authorBooks &&
        authorBooks.map((book: bookDTO, index: number) => (
          <div>
            {book.title}
            <br />
          </div>
        ))}
    </div>
  );
}

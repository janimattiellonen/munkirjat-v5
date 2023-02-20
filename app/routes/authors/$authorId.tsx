import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { getAuthor } from "~/models/authors.server";
import { getBooksByAuthor } from "~/models/books.server";

import { authorDTO, bookDTO } from "~/routes/books/types";

import { BackLink } from "~/components/BackLink";

export const loader = async ({ params }: LoaderArgs) => {
  const author = await getAuthor(parseInt(params?.authorId || "", 10));

  if (!author) {
    throw new Response("Author not Found", { status: 404 });
  }

  const authorBooks = await getBooksByAuthor(
    parseInt(params?.authorId || "", 10)
  );

  return json({ author, authorBooks });
};

export default function AuthorPage() {
  const { author, authorBooks }: { author: authorDTO; authorBooks: bookDTO[] } =
    useLoaderData();

  const { state } = useLocation();

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">
        {author.firstName} {author.lastName}
      </h1>

      {authorBooks && (
        <ul className="mt-8">
          {authorBooks.map((book: bookDTO, index: number) => (
            <li key={`author-page-book-title-${index}`} className="mb-4">
              {book.title}
            </li>
          ))}
        </ul>
      )}

      <BackLink url={`${state?.backLinkUrl ? state.backLinkUrl : "/"}`}>
        Back
      </BackLink>
    </div>
  );
}

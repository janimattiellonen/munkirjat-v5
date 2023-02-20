import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getBook } from "~/models/books.server";
import { Authors } from "~/routes/books/Authors";
import { BackLink } from "~/components/BackLink";
import { bookDTO } from "~/routes/books/types";

export const loader = async ({ params }: LoaderArgs) => {
  const book = await getBook(parseInt(params?.bookId || "", 10));

  if (!book) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(book);
};

function getFormat(format: string): string {
  if (format === "Book") {
    return "paperback";
  } else if (format === "E-book") {
    return "e-book";
  }

  return "";
}

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) {
    return "";
  }

  const formattedDate = new Intl.DateTimeFormat("fi-FI").format(
    new Date(dateStr)
  );

  return formattedDate;
}

function getPrice(price: number | undefined): string {
  if (!price) {
    return "";
  }

  const currencyFormat = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  return currencyFormat;
}

function getLanguage(language: string): string {
  switch (language) {
    case "fi": {
      return "finnish";
    }
    case "se": {
      return "swedish";
    }
    case "en": {
      return "english";
    }
    default: {
      return "";
    }
  }
}

export default function BookPage() {
  const book: bookDTO = useLoaderData();

  return (
    <div className="book-div ml-4 mt-4">
      <h1 className="text-4xl font-bold">{book.title}</h1>

      <Authors
        backLinkUrl={`/books/${book.id}`}
        authors={book.authors}
      ></Authors>

      <p>
        <MenuBookIcon className="mr-1" />
        {book.pageCount} pages, {getLanguage(book.language)},{" "}
        {getFormat(book.format)}
      </p>
      <p>{book.rating}</p>
      <p>{getPrice(book.price)}</p>
      <p>
        Is read:{" "}
        {book.isRead ? <CheckCircleOutlineIcon titleAccess="Is read" /> : "No"}
      </p>
      <p>{formatDate(book.startedReading)}</p>
      <p>{formatDate(book.finishedReading)}</p>

      <p className="mt-4">
        <BackLink url={"/"}>Back</BackLink>
      </p>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="book-div ml-4 mt-4">
        <h1>Book not found</h1>
      </div>
    );
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

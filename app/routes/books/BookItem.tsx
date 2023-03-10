import { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";

import { bookDTO } from "~/routes/books/types";

import { Authors } from "~/routes/books/Authors";

export type BookItemProps = {
  book: bookDTO;
};

export const BookItem = (
  props: PropsWithChildren<BookItemProps>
): JSX.Element => {
  return (
    <div>
      <h2>
        <Link state={{ backLinkUrl: "/" }} to={`/books/${props.book.id}`}>
          {props.book.title}
        </Link>
      </h2>
      <Authors
        className="mb-4"
        backLinkUrl="/"
        authors={props.book.authors}
      ></Authors>
    </div>
  );
};

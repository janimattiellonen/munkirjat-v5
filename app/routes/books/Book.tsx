import { PropsWithChildren } from "react";
import { bookType } from "~/routes/books/types";

import { Authors } from "~/routes/books/Authors";

export type BookProps = {
  book: bookType;
};

export const Book = (props: PropsWithChildren<BookProps>): JSX.Element => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <Authors authors={props.book.authorBook}></Authors>
    </div>
  );
};

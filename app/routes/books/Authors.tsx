import { PropsWithChildren } from "react";

import { authorBookType } from "~/routes/books/types";

type AuthorsProps = {
  authors: Array<authorBookType>;
};

export const Authors = (
  props: PropsWithChildren<AuthorsProps>
): JSX.Element => {
  const { authors } = props;

  return (
    <div className="mb-4">
      <p className="text-xs font-bold">
        {authors
          .map((author: authorBookType, i: number) => {
            return `${author.author.firstName} ${author.author.lastName}`;
          })
          .join(", ")}
      </p>
    </div>
  );
};

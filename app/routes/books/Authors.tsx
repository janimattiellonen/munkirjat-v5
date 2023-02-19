import { PropsWithChildren } from "react";

import { Link } from "@remix-run/react";
import { authorDTO } from "~/routes/books/types";

import GroupIcon from "@mui/icons-material/Group";

type AuthorsProps = {
  authors: Array<authorDTO>;
};

export const Authors = (
  props: PropsWithChildren<AuthorsProps>
): JSX.Element => {
  const { authors } = props;

  return (
    <div className="mb-4">
      <p className="text-xs font-bold">
        <GroupIcon className="mr-1" />
        {authors.map((author: authorDTO, i: number) => {
          return (
            <Link
              to={`/authors/${author.id}`}
              key={`author-info-author-name-${i}`}
            >
              {author.firstName} {author.lastName}
            </Link>
          );
        })}
      </p>
    </div>
  );
};

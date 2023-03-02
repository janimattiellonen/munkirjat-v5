import { PropsWithChildren } from "react";

import styled from "@emotion/styled";

import { Link } from "@remix-run/react";
import { authorDTO } from "~/routes/books/types";

import GroupIcon from "@mui/icons-material/Group";

type AuthorsProps = {
  authors: Array<authorDTO>;
  backLinkUrl?: string;
  className?: string;
};

const P = styled.p({
  "a:not(:last-of-type)": {
    "&::after": {
      content: "', '",
    },
  },
});

export const Authors = (
  props: PropsWithChildren<AuthorsProps>
): JSX.Element => {
  const { authors, backLinkUrl, className } = props;

  return (
    <div className={className}>
      <P className="text-xs font-bold">
        <GroupIcon className="mr-1" titleAccess="Authors" />
        {authors.map((author: authorDTO, i: number) => {
          return (
            <Link
              to={`/authors/${author.id}`}
              key={`author-info-author-name-${i}`}
              state={{ backLinkUrl }}
            >
              {author.firstName} {author.lastName}
            </Link>
          );
        })}
      </P>
    </div>
  );
};

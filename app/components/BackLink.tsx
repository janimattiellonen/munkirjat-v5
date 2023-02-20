import { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type BackLinkProps = {
  children: string | JSX.Element;
  url: string;
};
export const BackLink = ({
  children,
  url,
}: PropsWithChildren<BackLinkProps>): JSX.Element => {
  return (
    <span className="mt-4 block">
      <Link to={url}>
        <ArrowBackIcon />
        {children}
      </Link>
    </span>
  );
};

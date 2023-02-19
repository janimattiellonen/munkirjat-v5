import { authorDTO } from "~/routes/books/types";

export const toDTO = (raw: any): authorDTO => {
  return {
    id: raw.id,
    firstName: raw.first_name,
    lastName: raw.last_name,
  };
};

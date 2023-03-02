import { statsDTO } from "~/routes/books/types";

export function toDTO(raw: any): statsDTO {
  return {
    authorCount: raw.author_count,
    bookCount: raw.book_count,
    pageCount: raw.page_count,
  };
}

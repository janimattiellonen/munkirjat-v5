import { bookDTO } from "~/routes/books/types";

export const toDTO = (raw: any): bookDTO => {
  return {
    id: raw.id,
    title: raw.title,
    language: raw.language,
    pageCount: raw.page_count,
    startedReading: raw.started_reading,
    finishedReading: raw.finished_reading,
    price: raw.price,
    format: raw.format,
    isRead: raw.is_read,
    authors: raw.author_book.map((authorBook: any) => {
      return {
        id: authorBook.author.id,
        firstName: authorBook.author.first_name,
        lastName: authorBook.author.last_name,
      };
    }),
  };
};

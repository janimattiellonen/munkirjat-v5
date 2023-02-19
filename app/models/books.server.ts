import {
  fetchBook,
  fetchBooks,
  fetchBooksByAuthor,
} from "~/models/books.repository.server";

export function getBook(id: number) {
  return fetchBook(id);
}

export function getBooks() {
  return fetchBooks();
}

export function getBooksByAuthor(authorId: number) {
  return fetchBooksByAuthor(authorId);
}

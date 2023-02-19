import { fetchAuthor, fetchAuthors } from "~/models/authors.repository.server";

export function getAuthor(id: number) {
  return fetchAuthor(id);
}

export function getAuthors() {
  return fetchAuthors();
}

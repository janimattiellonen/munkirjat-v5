import { createConnection } from "~/models/utils";
import { toDTO } from "~/models/BookMapper";

export async function fetchBook(id: number) {
  const supabase = createConnection();

  let { data, error } = await supabase
    .from("book")
    .select(
      "id, title, language, page_count, started_reading, finished_reading, rating, price, format, is_read, author_book(author(id, first_name, last_name))"
    )
    .eq("id", id);

  if (error) {
    throw new Error("Failed to retrieve books");
  }

  return data?.length === 1 ? toDTO(data[0]) : null;
}

/**
 * Read more:
 *
 * - https://khalilstemmler.com/articles/enterprise-typescript-nodejs/use-dtos-to-enforce-a-layer-of-indirection/
 * - https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/
 */
export async function fetchBooks() {
  const supabase = createConnection();

  let { data, error } = await supabase
    .from("book")
    .select(
      "id, title, language, page_count, started_reading, finished_reading, rating, price, format, is_read, author_book(author(id, first_name, last_name))"
    );

  if (error) {
    throw new Error("Failed to retrieve books");
  }

  console.info(`data: ${JSON.stringify(data, null, 2)}`);

  const mapped = data && data.map((item) => toDTO(item));

  return mapped || [];
}

export async function fetchBooksByAuthor(authorId: number) {
  const supabase = createConnection();

  let { data, error } = await supabase
    .from("book")
    .select(
      "id, title, language, page_count, started_reading, finished_reading, rating, price, format, is_read, author_book!inner(author(id, first_name, last_name))"
    )
    .eq("author_book.author_id", authorId);

  if (error) {
    throw new Error("Failed to retrieve books");
  }

  const mapped = data && data.map((item) => toDTO(item));

  return mapped || [];
}

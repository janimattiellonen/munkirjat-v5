import { createConnection } from "~/models/utils";

import { authorDTO } from "~/routes/books/types";
import { toDTO } from "~/models/AuthorMapper";

export async function fetchAuthor(id: number) {
  const supabase = createConnection();

  let { data, error } = await supabase
    .from("author")
    .select("id, first_name, last_name")
    .eq("id", id);

  if (error) {
    throw new Error("Failed to retrieve books");
  }

  console.info(
    `fetchAuthor, id: ${id}, data: ${JSON.stringify(data, null, 2)}`
  );

  return data?.length === 1 ? toDTO(data[0]) : null;
}

export async function fetchAuthors() {
  const supabase = createConnection();

  let { data, error } = await supabase
    .from("author")
    .select("id, first_name, last_name");

  if (error) {
    throw new Error("Failed to retrieve authors");
  }

  const mapped = data && data.map((item) => toDTO(item));

  return mapped;
}

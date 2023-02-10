import { createClient } from "@supabase/supabase-js";

export async function getBooks() {
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_KEY!;

  const supabase = createClient(supabaseUrl, supabaseKey);

  let { data, error } = await supabase
    .from("book")
    .select(
      "id, title, language, pageCount, startedReading, finishedReading, rating, price, format, isRead, authorBook(author(id, firstName, lastName))"
    );

  console.info(`data: ${JSON.stringify(data, null, 2)}`);
  console.info(`error: ${JSON.stringify(error, null, 2)}`);

  return data || [];
}

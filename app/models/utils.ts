import { createClient } from "@supabase/supabase-js";
import { Database } from "../../schema";

export function createConnection() {
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_KEY!;

  return createClient<Database>(supabaseUrl, supabaseKey);
}

export function createApiConnection() {
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_KEY!;

  return createClient(
    "http://localhost:54321/functions/v1/hello-world",
    supabaseKey
  );
}

// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as postgres from "https://deno.land/x/postgres@v0.14.2/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);

console.log("Hello from Functions!");

console.log(`DB url: ${databaseUrl}`);
serve(async (req) => {
  const { name } = await req.json();
  const data = {
    message: `Hello ${name}!`,
  };

  try {
    const connection = await pool.connect();

    try {
      const bookCountResult =
        await connection.queryObject`select count(*) as book_count, language from book group by language`;
      const authorCountResult =
        await connection.queryObject`select count(*) from author`;

      const bookCount: Array<{ language: string; count: number }> =
        bookCountResult.rows.map((item: any) => {
          const value = item["book_count"];

          return {
            language: item?.language,
            count: typeof value === "bigint" ? Number(value) : value,
          };
        });

      const authorCount: any = authorCountResult.rows;

      return new Response(
        JSON.stringify({
          bookCount,
          authorCount:
            authorCount.length === 1 ? Number(authorCount[0]?.count) : 0,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
    } catch (err: any) {
      return new Response(String(err?.message ?? err), { status: 500 });
    } finally {
      connection.release();
    }
  } catch (err: any) {
    console.error(err);

    return new Response(String(err?.message ?? err), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'

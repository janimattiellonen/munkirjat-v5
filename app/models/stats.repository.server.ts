import { createFunctionConnection } from "~/models/utils";

export async function fetchStats() {
  const supabase = createFunctionConnection();

  const { data, error } = await supabase.functions.invoke("hello-world", {
    body: { name: "Functions" },
  });

  const supabaseFunctionsUrl = process.env.SUPABASE_FUNCTIONS_URL!;

  if (error) {
    console.info(`Error: ${JSON.stringify(error, null, 2)}`);
    throw new Error("Failed to retrieve stats");
  }

  console.info(`fetchStats data: ${JSON.stringify(data, null, 2)}`);

  return data;
}

import { createApiConnection } from "~/models/utils";

export async function fetchStats() {
  const supabase = createApiConnection();

  const { data, error } = await supabase.functions.invoke("hello-world", {
    body: { name: "Functions" },
  });

  if (error) {
    console.info(`Error: ${JSON.stringify(error, null, 2)}`);
    throw new Error("Failed to retrieve stats");
  }

  console.info(`fetchStats data: ${JSON.stringify(data, null, 2)}`);

  return data;
}

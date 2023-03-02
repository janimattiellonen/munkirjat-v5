import { createFunctionConnection } from "~/models/utils";

export async function fetchStats() {
  const supabase = createFunctionConnection();

  const { data, error } = await supabase.functions.invoke("hello-world", {
    body: { name: "Functions" },
  });

  if (error) {
    console.info(`Error: ${JSON.stringify(error, null, 2)}`);
    throw new Error(
      "Failed to retrieve stats: " + JSON.stringify(error, null, 2)
    );
  }

  console.info(`fetchStats data: ${JSON.stringify(data, null, 2)}`);

  return data;
}

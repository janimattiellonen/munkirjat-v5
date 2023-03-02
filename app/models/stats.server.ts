import { statsDTO } from "~/routes/books/types";

import { fetchStats } from "~/models/stats.repository.server";

export async function getStats() {
  const data = await fetchStats();

  return { ...data };
}

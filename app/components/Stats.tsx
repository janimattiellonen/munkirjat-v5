import { PropsWithChildren } from "react";
import { statsDTO } from "~/routes/books/types";

export type StatsProps = {
  stats: statsDTO;
};

type BookCountProps = {
  stats: statsDTO;
};

const BookCount = ({ stats }: PropsWithChildren<BookCountProps>) => {
  const initialValue = 0;

  const totalBookCount = stats.bookCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    initialValue
  );

  return (
    <div>
      <h3 className="font-bold">Books</h3>

      <p>Total count: {totalBookCount}</p>

      {stats.bookCount.map((item) => (
        <p key={item.language}>
          {item.language}: {item.count}
        </p>
      ))}
    </div>
  );
};
export const Stats = ({ stats }: PropsWithChildren<StatsProps>) => {
  console.info(`STATS: ${JSON.stringify(stats, null, 2)}`);
  return (
    <div>
      <h2 className="text-2xl font-bold">Stats</h2>

      <p>Authors: {stats.authorCount}</p>

      <BookCount stats={stats} />
    </div>
  );
};

/*
TATS: {
  "bookCount": [
    {
      "en": 169
    },
    {
      "se": 169
    },
    {
      "fi": 64
    }
  ],
  "authorCount": 139
}
 */

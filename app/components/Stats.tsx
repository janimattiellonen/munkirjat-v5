import { PropsWithChildren } from "react";
import { statsDTO } from "~/routes/books/types";

export type StatsProps = {
  stats: statsDTO;
};

type BookCountProps = {
  stats: statsDTO;
};

const mapLanguage = (languageCode: string): string => {
  const mapping: { [index: string]: string } = {
    fi: "Finnish",
    se: "Swedish",
    en: "English",
  };

  return mapping[languageCode] ?? "";
};

type StatItemProps = {
  label: string;
  value: number;
};

const StatItem = ({ label, value }: PropsWithChildren<StatItemProps>) => {
  return (
    <p
      key={label}
      className="flex justify-between [min-width:5.625rem] [max-width:8.125rem]"
    >
      <span className="block">{label}</span>
      <span className="block">{value}</span>
    </p>
  );
};

const BookCount = ({ stats }: PropsWithChildren<BookCountProps>) => {
  const initialValue = 0;

  const totalBookCount = stats.bookCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    initialValue
  );

  return (
    <div>
      <h3 className="mt-8 mb-4 font-bold">Books</h3>

      {stats.bookCount.map((item) => (
        <StatItem label={mapLanguage(item.language)} value={item.count} />
      ))}

      <StatItem label="Total" value={totalBookCount} />
    </div>
  );
};
export const Stats = ({ stats }: PropsWithChildren<StatsProps>) => {
  return (
    <div>
      <h2 className="mt-8 mb-4 text-2xl font-bold">Stats</h2>

      <StatItem label="Authors" value={stats.authorCount} />

      <BookCount stats={stats} />
    </div>
  );
};

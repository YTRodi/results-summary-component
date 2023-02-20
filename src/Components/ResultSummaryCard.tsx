import { SummaryItem } from "./SummaryItem";
import { SummaryItemType } from "../types";
import DATA from "../resources/data.json";

const SUMMARY_ITEMS = [...DATA] satisfies SummaryItemType[];

export const ResultSummaryCard = () => {
  return (
    <div className="bg-summaryBackground sm:flex w-[680px] rounded-3xl drop-shadow-2xl">
      <ScoreSection />
      <SummarySection />
    </div>
  );
};

const ScoreSection = () => {
  return (
    <section className="flex-1 bg-gradient-to-t from-resultBackground to-resultBackground/80 rounded-b-3xl sm:rounded-3xl p-8 flex flex-col gap-4 items-center justify-between">
      <h2 className="text-resultTitle text-lg font-bold sm:text-xl">
        Your Result
      </h2>
      <ScoreCircle />
      <div className="flex flex-col items-center gap-2 text-center px-10 sm:px-5">
        <h1 className="text-resultSubtitle text-2xl sm:text-3xl">Great</h1>
        <p className="text-resultBody">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

const ScoreCircle = () => {
  const totalSummaryItemsScore = SUMMARY_ITEMS.reduce(
    (acc, cur) => acc + cur.score,
    0
  );
  const score = totalSummaryItemsScore / SUMMARY_ITEMS.length;

  return (
    <div className="bg-gradient-to-b from-resultScoreBackground to-resultScoreBackground/5 rounded-full aspect-square flex flex-col items-center gap-2 p-8 sm:p-10">
      <h1 className="text-resultScoreTotal text-6xl font-extrabold sm:text-7xl">
        {score.toFixed()}
      </h1>
      <h3 className="text-resultScoreOf text-sm font-bold sm:text-base">
        of 100
      </h3>
    </div>
  );
};

const SummarySection = () => {
  return (
    <section className="flex-1 p-8 flex flex-col gap-6">
      <h2 className="text-lg font-bold sm:text-xl">Summary</h2>
      <SummaryItemList />
      <button className="border rounded-full p-4 bg-summaryButtonBackground text-summaryButtonText hover:bg-violetPrimary focus:bg-violetPrimary outline-none focus:outline-violetPrimary">
        Continue
      </button>
    </section>
  );
};

const SummaryItemList = () => {
  return (
    <div className="flex flex-col gap-4">
      {SUMMARY_ITEMS.map((summaryItem) => (
        <SummaryItem key={summaryItem.category} {...summaryItem} />
      ))}
    </div>
  );
};

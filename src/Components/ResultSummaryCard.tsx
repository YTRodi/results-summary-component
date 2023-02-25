import { useState } from "react";
import { TotalScore } from "./TotalScore";
import { MetricItem } from "./MetricItem";
import { type Metric } from "../types";
import DATA from "../resources/data.json";

const METRICS = [...DATA] satisfies Metric[];

export const ResultSummaryCard = () => {
  return (
    <div className="bg-summaryBackground sm:flex rounded-3xl drop-shadow-2xl w-[680px] sm:h-[470px] animate-fade-in">
      <ResultSection />
      <SummarySection />
    </div>
  );
};

const ResultSection = () => {
  const [showResult, setShowResult] = useState(false);
  const sumOfScores = METRICS.reduce((acc, cur) => acc + cur.score, 0);
  const totalScoreAverage = sumOfScores / METRICS.length;
  const onEndCountUpTotalScore = () => {
    setShowResult(true);
  };

  return (
    <section className="bg-gradient-to-t from-resultBackground to-resultBackground/80 rounded-b-3xl sm:rounded-3xl sm:w-[340px] py-8 sm:px-8 flex flex-col justify-between gap-6">
      <div className="flex flex-col items-center gap-6 h-full">
        <h2 className="text-resultTitle text-lg font-bold sm:text-xl">
          Your Result
        </h2>
        <TotalScore
          totalScore={totalScoreAverage}
          onEndCountUpTotalScore={onEndCountUpTotalScore}
        />
      </div>
      {showResult && (
        <div className="flex flex-col items-center gap-2 text-center px-10 sm:px-5">
          <h1 className="text-resultSubtitle text-2xl sm:text-3xl animate-slide-in-bottom">
            Great
          </h1>
          <p className="text-resultBody animate-slide-in-bottom">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      )}
    </section>
  );
};

const SummarySection = () => {
  return (
    <section className="flex-1 p-8 flex flex-col justify-between gap-6">
      <h2 className="text-lg font-bold sm:text-xl">Summary</h2>
      <MetricItemList />
      <button className="transition-colors border rounded-full p-4 bg-summaryButtonBackground text-summaryButtonText hover:bg-violetPrimary focus:bg-violetPrimary outline-none focus:outline-violetPrimary">
        Continue
      </button>
    </section>
  );
};

const MetricItemList = () => {
  return (
    <ul className="flex flex-col gap-4">
      {METRICS.map((metricItem) => (
        <MetricItem key={metricItem.category} {...metricItem} />
      ))}
    </ul>
  );
};

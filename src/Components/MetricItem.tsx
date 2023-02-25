import CountUp from "react-countup";
import { Metric } from "../types";

type MetricItemProps = Metric & {};

export const MetricItem = ({ category, score, icon }: MetricItemProps) => {
  const colorCombination = {
    Reaction: {
      text: "text-summaryReactionText",
      background: "bg-summaryReactionBackground",
    },
    Memory: {
      text: "text-summaryMemoryText",
      background: "bg-summaryMemoryBackground",
    },
    Verbal: {
      text: "text-summaryVerbalText",
      background: "bg-summaryVerbalBackground",
    },
    Visual: {
      text: "text-summaryVisualText",
      background: "bg-summaryVisualBackground",
    },
  }[category];

  return (
    <li
      className={`summary-item flex justify-between p-4 rounded-xl ${colorCombination?.background}`}
    >
      <div className="flex gap-4">
        <img src={icon} alt={`${category} icon category`} />
        <p className={colorCombination?.text}>{category}</p>
      </div>
      <strong className="text-summaryScoreTotal">
        <CountUp end={score} />
        <span className="text-summaryScoreOf"> / 100</span>
      </strong>
    </li>
  );
};
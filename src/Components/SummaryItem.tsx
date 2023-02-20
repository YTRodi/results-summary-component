import { SummaryItemType } from "../types";

type SummaryItemProps = SummaryItemType & {};

export const SummaryItem = ({ category, score, icon }: SummaryItemProps) => {
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
    <div
      className={`flex justify-between p-4 rounded-xl ${colorCombination?.background}`}
    >
      <div className="flex gap-4">
        <img src={icon} alt={`${category} icon category`} />
        <p className={colorCombination?.text}>{category}</p>
      </div>
      <strong className="text-summaryScoreTotal">
        {score}
        <span className="text-summaryScoreOf"> / 100</span>
      </strong>
    </div>
  );
};

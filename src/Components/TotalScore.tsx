import CountUp, { type CountUpProps } from 'react-countup'

interface TotalScoreProps {
  totalScore: number
  onEndCountUpTotalScore: CountUpProps['onEnd']
}

export const TotalScore = ({
  totalScore,
  onEndCountUpTotalScore,
}: TotalScoreProps) => {
  return (
    <div className="animate-slide-in-bottom bg-gradient-to-b from-resultScoreBackground to-resultScoreBackground/5 rounded-full aspect-square flex flex-col items-center gap-2 p-8 sm:p-10">
      <h1 className="text-resultScoreTotal text-6xl font-extrabold sm:text-7xl">
        <CountUp end={totalScore} onEnd={onEndCountUpTotalScore} />
      </h1>
      <h3 className="text-resultScoreOf text-sm font-bold sm:text-base">
        of 100
      </h3>
    </div>
  )
}

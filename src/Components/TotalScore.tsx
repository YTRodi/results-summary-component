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
    <div className="flex aspect-square animate-slide-in-bottom flex-col items-center gap-2 rounded-full bg-gradient-to-b from-resultScoreBackground to-resultScoreBackground/5 p-8 sm:p-10">
      <h1 className="text-6xl font-extrabold text-resultScoreTotal sm:text-7xl">
        <CountUp end={totalScore} onEnd={onEndCountUpTotalScore} />
      </h1>
      <h3 className="text-sm font-bold text-resultScoreOf sm:text-base">
        of 100
      </h3>
    </div>
  )
}

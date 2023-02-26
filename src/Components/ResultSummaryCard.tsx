import { useState } from 'react'

import DATA from '../resources/data.json'
import { type Metric } from '../types'

import { MetricItem } from './MetricItem'
import { TotalScore } from './TotalScore'

const METRICS = [...DATA] satisfies Metric[]

export const ResultSummaryCard = () => {
  return (
    <div className="w-[680px] animate-fade-in rounded-3xl bg-summaryBackground drop-shadow-2xl sm:flex sm:h-[470px]">
      <ResultSection />
      <SummarySection />
    </div>
  )
}

const ResultSection = () => {
  const [showResult, setShowResult] = useState(false)
  const sumOfScores = METRICS.reduce((acc, cur) => acc + cur.score, 0)
  const totalScoreAverage = sumOfScores / METRICS.length
  const onEndCountUpTotalScore = () => {
    setShowResult(true)
  }

  return (
    <section className="flex flex-col justify-between gap-6 rounded-b-3xl bg-gradient-to-t from-resultBackground to-resultBackground/80 py-8 sm:w-[340px] sm:rounded-3xl sm:px-8">
      <div className="flex h-full flex-col items-center gap-6">
        <h2 className="text-lg font-bold text-resultTitle sm:text-xl">
          Your Result
        </h2>
        <TotalScore
          totalScore={totalScoreAverage}
          onEndCountUpTotalScore={onEndCountUpTotalScore}
        />
      </div>
      {showResult && (
        <div className="flex flex-col items-center gap-2 px-10 text-center sm:px-5">
          <h1 className="animate-slide-in-bottom text-2xl text-resultSubtitle sm:text-3xl">
            Great
          </h1>
          <p className="animate-slide-in-bottom text-resultBody">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      )}
    </section>
  )
}

const SummarySection = () => {
  return (
    <section className="flex flex-1 flex-col justify-between gap-6 p-8">
      <h2 className="text-lg font-bold sm:text-xl">Summary</h2>
      <MetricItemList />
      <button className="rounded-full border bg-summaryButtonBackground p-4 text-summaryButtonText outline-none transition-colors hover:bg-violetPrimary focus:bg-violetPrimary focus:outline-violetPrimary">
        Continue
      </button>
    </section>
  )
}

const MetricItemList = () => {
  return (
    <ul className="flex flex-col gap-4">
      {METRICS.map((metricItem) => (
        <MetricItem key={metricItem.category} {...metricItem} />
      ))}
    </ul>
  )
}

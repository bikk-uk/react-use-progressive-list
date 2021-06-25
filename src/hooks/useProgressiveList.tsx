import { useState } from 'react'

export interface ProgressiveListParams {
  initialCount: number
  totalCount: number
}

export interface ProgressiveListTools {
  displayCount: number
}

export const useProgressiveList = ({ initialCount }: ProgressiveListParams): ProgressiveListTools => {
  const [displayCount] = useState(initialCount)

  return { displayCount }
}

export default useProgressiveList

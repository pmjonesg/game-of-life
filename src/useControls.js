import { useState } from 'react'

function useControls({ incrementGeneration, decrementGeneration }) {
  const [paused, setPaused] = useState(false)

  function handleNext() {
    incrementGeneration()
  }

  function handlePrevious() {
    decrementGeneration()
  }

  return {
    paused,
    setPaused,
    handleNext,
    handlePrevious
  }
}

export default useControls

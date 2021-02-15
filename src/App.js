import { useEffect } from "react";

import Grid from "./Grid";
import Controls from "./Controls";
import InfoBox from "./InfoBox";
import useControls from "./useControls";
import useGeneration from "./useGeneration";

const dimensions = [50, 120] // x, y

function App() {
  const {
    generation,
    count,
    incrementGeneration,
    decrementGeneration,
    updateGeneration
  } = useGeneration({ dimensions })

  const {
    paused,
    setPaused,
    handleNext,
    handlePrevious
  } = useControls({ incrementGeneration, decrementGeneration })

  function handleEdit(x, y, value) {
    generation[x][y] = value
    updateGeneration(generation)
  }

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      incrementGeneration()
    }, 1000/60) //denominator is the fps

    return () => clearInterval(interval)
  }, [incrementGeneration, paused])

  return (
    <>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <InfoBox paused={paused} generationCount={count} />
      </div>
      <Grid dimensions={dimensions} generation={generation} handleEdit={handleEdit} />
      <div style={{ position: 'absolute', bottom: 0, left: 'calc(50% - 100px)' }}>
        <Controls
          paused={paused}
          handlePlay={() => setPaused(false)}
          handlePause={() => setPaused(true)}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          hasPrevious={!!count}
        />
      </div>
    </>
  )
}

export default App;

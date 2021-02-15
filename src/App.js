import Grid from "./Grid";
import {useState, useEffect} from "react";
import Controls from "./Controls";
import InfoBox from "./InfoBox";

export function getNeighbours(x, y, generation) {
  const topLeft = generation[x - 1] ? generation[x - 1][y - 1] : undefined
  const topMiddle = generation[x] ? generation[x][y - 1] : undefined
  const topRight = generation[x + 1] ? generation[x + 1][y - 1] : undefined
  const left = generation[x - 1] ? generation[x - 1][y] : undefined
  const right = generation[x + 1] ? generation[x + 1][y] : undefined
  const bottomLeft = generation[x - 1] ? generation[x - 1][y + 1] : undefined
  const bottomMiddle = generation[x] ? generation[x][y + 1] : undefined
  const bottomRight = generation[x + 1] ? generation[x + 1][y + 1] : undefined

  return [
    topLeft,
    topMiddle,
    topRight,
    left,
    right,
    bottomLeft,
    bottomMiddle,
    bottomRight
  ]
}

export function isAlive(currentState, neighbours) {
  const liveNeighbourCount = neighbours.reduce((count, cell) => count += Boolean(cell), 0) 

  if (liveNeighbourCount < 2) return false // underpopulation
  if (liveNeighbourCount > 3) return false // overpopulation
  if (currentState === false && liveNeighbourCount === 3) return true // reproduction

  return currentState
}

// A generation of cells is a matrix of the provided dimensions
// this function will create a new generation based on the previous one
// according to the rules of life:
//   1. Any live cell with fewer than 2 live neighbours dies, as if by underpopulation
//   2. Any live cell with 2 or 3 live neighbours lives on to the next generation
//   3. Any live cell with more than 3 live neighbours dies, as if by overpopulation
//   4. Any dead cell with exactly 3 live neighbours becomes a live cell, as if by reproduction
// the return value will be the new generation
function generateGeneration(dimensions, generation = []) {
  const [X, Y] = dimensions
  const newGeneration = [...generation]

  // If this is the first generation (an empty one), generate randomly
  if (!generation.length) {
    for (let x = 0; x < X; x++) {
      if (!newGeneration[x]) newGeneration[x] = []
      for (let y = 0; y < Y; y++) {
        newGeneration[x][y] = Math.random() > 0.92 // this will generate 10% live cells
      }
    }

    return newGeneration
  }

  for (let x = 0; x < X; x++) {
    for (let y = 0; y < Y; y++) {
      newGeneration[x][y] = isAlive(newGeneration[x][y], getNeighbours(x, y, generation))
    }
  }

  return newGeneration
}

const dimensions = [50, 120] // x, y

function App() {
  const [generation, setGeneration] = useState(generateGeneration(dimensions))
  const [tick, setTick] = useState(0)

  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      const newGeneration = generateGeneration(dimensions, generation)
      setGeneration(newGeneration)
    }, 1000/60) //denominator is the fps

    return () => clearInterval(interval)
  }, [generation, paused])

  return (
    <>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <InfoBox paused={paused} />
      </div>
      <Grid dimensions={dimensions} generation={generation} />
      <div style={{ position: 'absolute', bottom: 0, left: 'calc(50% - 100px)' }}>
        <Controls handlePlay={() => setPaused(false)} handlePause={() => setPaused(true)} />
      </div>
    </>
  )
}

export default App;

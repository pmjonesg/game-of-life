import { render, screen } from '@testing-library/react';
import App, {getNeighbours, isAlive} from './App';

describe('Game of Life', () => {
  describe('isAlive', () => {
    it('dies by underpopulation if it has less than 2 live neighbours', () => {
      const result = isAlive(true, [true, false, false, false, false, false, false, false])
      expect(result).toBe(false)
    })

    it('survives if it has at least 2 live neighbours', () => {
      const result = isAlive(true, [true, true, false, false, false, false, false, false])
      expect(result).toBe(true)
    })

    it('dies by overpopulation if it has more than 3 live neighbours', () => {
      const result = isAlive(true, [true, true, true, true, false, false, false, false])
      expect(result).toBe(false)
    })

    it('becomes alive if it has exactly 3 live neighbours', () => {
      const result = isAlive(false, [true, true, true, false, false, false, false, false])
      expect(result).toBe(true)
    })
  })

  describe('getNeighbours', () => {
    it('gets neighbours for a cell surrounded by other cells', () => {
      const generation = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]
      const result = getNeighbours(1, 1, generation)
      expect(result).toStrictEqual([false, false, false, false, false, false, false, false])
    })

    it('gets neighbours for a cell missing top neighbours', () => {
      const generation = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]
      const result = getNeighbours(1, 0, generation)
      expect(result).toStrictEqual([undefined, undefined, undefined, false, false, false, false, false])
    })

    it('gets neighbours for a cell missing left neighbours', () => {
      const generation = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]
      const result = getNeighbours(0, 1, generation)
      expect(result).toStrictEqual([undefined, false, false, undefined, false, undefined, false, false])
    })

    it('gets neighbours for a cell missing right neighbours', () => {
      const generation = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]
      const result = getNeighbours(2, 1, generation)
      expect(result).toStrictEqual([false, false, undefined, false, undefined, false, false, undefined])
    })

    it('gets neighbours for a cell missing bottom neighbours', () => {
      const generation = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]
      const result = getNeighbours(1, 2, generation)
      expect(result).toStrictEqual([false, false, false, false, false, undefined, undefined, undefined])
    })
  })
})

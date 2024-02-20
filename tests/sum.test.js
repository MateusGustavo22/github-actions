import { sum } from '../src/sum'

describe('sum function', () => {
  it('should return 2 + 2 equals 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})

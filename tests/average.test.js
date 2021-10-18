const { average } = require('../utils/for_testing')

describe.skip('average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1)
  })
  test('of an array', () => {
    expect(average([1, 2, 3, 4, 5, 6, 7])).toBe(4)
  })
})

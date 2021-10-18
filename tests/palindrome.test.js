const { palindrome } = require('../utils/for_testing')

test.skip('palindrome of nahuel', () => {
  const result = palindrome('nahuel')
  expect(result).toBe('leuhan')
})

test.skip('palindrome of empty string', () => {
  const result = palindrome('')
  expect(result).toBe('')
})

test.skip('palindrome of undefined', () => {
  const result = palindrome()
  expect(result).toBeUndefined()
})

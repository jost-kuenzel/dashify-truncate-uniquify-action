import truncate from '../truncate'

describe('truncate', () => {
  test.each([
    ['', 0, ''],
    ['abcdefghijkl', 1, 'a'],
    ['abcdefghijkl', 5, 'abcde'],
    ['abcdefghijkl', -5, ''],
    ['abcdefghijkl', 500, 'abcdefghijkl']
  ])('Truncates "%s", %s to "%s"', (input, maxLength, expected) => {
    expect(truncate(maxLength)(input)).toBe(expected)
  })
})

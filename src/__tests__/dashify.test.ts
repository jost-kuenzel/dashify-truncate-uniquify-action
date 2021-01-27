import convert from '../dashify'

describe('dashify', () => {
  test.each([
    ['!"§$%&/(', ''],
    ['abc!"§$%&/(def', 'abc-def'],
    ['a!"§_b*$%&c/(', 'a-b-c'],
    ['-----', ''],
    ['a 🚀 b ', 'a-b'],
    ['    a=b===c ', 'a-b-c'],
    ['XYZ', 'xyz']
  ])('Converts "%s" to "%s"', (input, expected) => {
    expect(convert(input)).toBe(expected)
  })
})

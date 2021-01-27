import truncateWithSuffix from '../truncateWithSuffix'

describe('truncateWithSuffix', () => {
  test.each([
    [10, 'foobar', 6, 'abcdefghijklmnopqr', 'abc_3858f6'],
    [10, 'foobar', 10, 'abcdefghijklmnopqr', '_3858f62230'],
    [20, 'foobar', 10, 'abcdefghijklmnopqr', 'abcdefghi_3858f62230'],
    [
      50,
      'foobar',
      20,
      'abcdefghijklmnopqr',
      'abcdefghijklmnopqr_3858f62230ac3c915f30'
    ]
  ])(
    'truncateWIthSuffix',
    (desiredLength, suffixSeed, desiredSuffixLength, input, expected) => {
      expect(
        truncateWithSuffix(
          desiredLength,
          suffixSeed,
          desiredSuffixLength
        )(input)
      ).toBe(expected)
    }
  )
})

import convert from '../convert'

describe('convert', () => {
  test.each([
    ['feature/Übercooles-Mega_Gedöns', 30, 7, 'feature-bercooles-mega-ged-ns'],
    ['feature/Übercooles-Mega_Gedöns', 29, 7, 'feature-bercooles-meg_f002c7c'],
    ['feature/Übercooles-Mega_xxxxxx', 29, 7, 'feature-bercooles-meg_ca6c466'],
    ['abcdefghijklmÄÖÜÄÖÜß!"§$%&/()', 20, 10, 'abcdefghi_39fbdf57b9'],
    ['abcdefghijklm', 100, 6, 'abcdefghijklm'],
    ['abcdefghijklm', 0, 6, ''],
    ['abcdefghijklm', 0, 0, '']
  ])('Converts "%s"', (input, desiredLength, desiredSuffixLength, expected) => {
    expect(convert(input, desiredLength, desiredSuffixLength)).toBe(expected)
  })
})

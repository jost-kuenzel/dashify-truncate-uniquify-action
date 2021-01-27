import {pipe} from 'ramda'
import truncate from './truncate'
import md5 from 'md5'

const truncateWithSuffix = (
  desiredLength: number,
  suffixSeed: string,
  desiredSuffixLength: number
) => (str: string): string =>
  pipe(
    (s: string): string =>
      truncate(desiredLength - 1 - Math.abs(desiredSuffixLength), s),
    (s: string): string =>
      `${s}_${truncate(desiredSuffixLength, md5(suffixSeed))}`
  )(str)

export default truncateWithSuffix

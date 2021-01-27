import {ifElse, lte, pipe, when} from 'ramda'
import dashify from './dashify'
import truncateWithSuffix from './truncateWithSuffix'

const exceedsLength = (length: number, str: string) => (): boolean =>
  str.length > length

const convert = (
  str: string,
  maxLength: number,
  suffixLength: number
): string =>
  ifElse(
    () => lte(maxLength, 0),
    () => '',
    () =>
      pipe(
        dashify,
        when(
          exceedsLength(maxLength, str),
          truncateWithSuffix(maxLength, str, suffixLength)
        )
      )(str)
  )(null)

export default convert

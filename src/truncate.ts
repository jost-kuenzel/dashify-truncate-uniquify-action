import {curry} from 'ramda'

const truncate = curry((maxLength: number, str: string) =>
  str.substr(0, maxLength)
)

export default truncate

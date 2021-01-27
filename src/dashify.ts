import {pipe, replace, toLower} from 'ramda'

const dashify = (str: string): string =>
  pipe(
    replace(/[^a-zA-Z0-9]/g, '-'),
    replace(/-+/g, '-'),
    replace(/-+$/, ''),
    replace(/^-+/, ''),
    toLower
  )(str)

export default dashify

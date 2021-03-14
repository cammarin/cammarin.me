/**
 * Transform string into a trimmed single line string.
 *
 * Remove newline characters, replace multiple
 * whitespaces in a row for only one, and trim whitespace.
 *
 * @param {string} str string to be minified.
 * @returns trimmed single line string.
 */
const minifyString = function minifyString(str: string) {
  return str.replace(/\s\s+/gm, ' ').trim()
}

const Utils = {
  minifyString,
}

export { minifyString }
export default Utils

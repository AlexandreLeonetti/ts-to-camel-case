
import toSpaceCase from 'to-space-case';

/**
 * Convert a `string` to camel case.
 *
 * @param {string} string - The string to convert to camel case.
 * @return {string} The camel-cased string.
 */
function toCamelCase(string: string): string {
 return toSpaceCase(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
 });
}

export default toCamelCase;

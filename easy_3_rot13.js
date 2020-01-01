// Welcome to cipher day!
// write a program that can encrypt texts with an alphabetical caesar cipher. This cipher can ignore numbers, symbols, and whitespace.
// for extra credit, add a 'decrypt' function to your program!

function encrypt(s) {
  const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const shifted = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  const index = x => normal.indexOf(x);
  const translate = x => (index(x) > -1 ? shifted[index(x)] : x);
  return s
    .split('')
    .map(translate)
    .join('');
}
const decrypt = encrypt;
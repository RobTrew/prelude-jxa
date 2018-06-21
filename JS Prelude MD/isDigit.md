```js
// isDigit :: Char -> Bool
const isDigit = c => {
  const n = ord(c);
  return n >= 48 && n <= 57;
};
```
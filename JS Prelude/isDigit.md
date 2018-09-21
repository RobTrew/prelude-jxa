```js
// isDigit :: Char -> Bool
const isDigit = c => {
  const n = ord(c);
  return 48 <= n && 57 >= n;
};
```
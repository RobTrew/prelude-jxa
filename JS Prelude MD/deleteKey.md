```js
// deleteKey :: String -> Dict -> Dict
const deleteKey = k => dct =>
    (delete dct[k], dct);
```
```js
// insertMap :: Dict -> String -> a -> Dict
const insertMap = (dct, k, v) =>
  Object.assign(dct, {[k]: v});
```
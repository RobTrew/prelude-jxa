```js
// insertDict :: Dict -> String -> a -> Dict
const insertDict = (dct, k, v) =>
  Object.assign(dct, {[k]: v});
```
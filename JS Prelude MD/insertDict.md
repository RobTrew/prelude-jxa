```js
// insertDict :: String -> a -> Dict -> Dict
const insertDict = (k, v, dct) =>
    Object.assign(dct, {
        [k]: v
    });
```
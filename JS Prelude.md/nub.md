```js
// nub :: [a] -> [a]
const nub = xs => nubBy((a, b) => a === b, xs);
```
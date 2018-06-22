```js
// intersectionBy:: (a -> a -> Bool) -> [[a]] -> [a]
const intersectionBy = (eq, xs) =>
    foldr1(((a, x) => intersectBy(eq, a, x)), xs);
```
```js
// composeList2 :: [(a -> a)] -> (a -> a)
const composeList2 = fs =>
    x => fs.reduce((a, f) => f(a), x);
```
```js
// composeListLTR :: [(a -> a)] -> (a -> a)
const composeListLTR = fs =>
    x => fs.reduce((a, f) => f(a), x);
```
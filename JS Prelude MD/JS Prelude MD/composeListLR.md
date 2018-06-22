```js
// composeListLR :: [(a -> a)] -> (a -> a)
const composeListLR = fs =>
    x => fs.reduce((a, f) => f(a), x);
```
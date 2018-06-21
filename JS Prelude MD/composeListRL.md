```js
// composeListRL :: [(a -> a)] -> (a -> a)
const composeListRL = fs =>
    x => fs.reduceRight((a, f) => f(a), x, fs);
```
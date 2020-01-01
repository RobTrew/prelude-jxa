```js
// composeList :: [(a -> a)] -> (a -> a)
const composeList = fs =>
    x => fs.reduceRight(
        (a, f) => f(a), x
    );
```
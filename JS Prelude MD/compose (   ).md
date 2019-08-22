```js
// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (...fs) =>
    x => fs.reduceRight((a, f) => f(a), x);
```
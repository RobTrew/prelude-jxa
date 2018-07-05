```js
// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = (f, xs) =>
    0 < xs.length ? init(xs)
    .reduceRight(f, last(xs)) : [];
```
```js
// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = (f, xs) =>
    xs.length > 0 ? init(xs)
    .reduceRight(f, last(xs)) : [];
```
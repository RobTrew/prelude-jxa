```javascript
// mapAccumR :: (acc -> x -> (acc, y)) -> acc ->
//    [x] -> (acc, [y])
const mapAccumR = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from right to left.
    acc => xs => [...xs].reduceRight(
        ([a, b], x) => second(
            v => [v].concat(b)
        )(
            f(a)(x)
        ),
        Tuple(acc)([])
    );
```
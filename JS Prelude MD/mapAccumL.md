```javascript
// mapAccumL :: (acc -> x -> (acc, y)) -> acc ->
// [x] -> (acc, [y])
const mapAccumL = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from left to right.
    acc => xs => [...xs].reduce(
        ([a, bs], x) => second(
            v => bs.concat(v)
        )(
            f(a)(x)
        ),
        Tuple(acc)([])
    );
```
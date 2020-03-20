```js
// mapAccumR :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumR = f => acc => xs =>
    // A tuple of an accumulation and a list derived by a
    // combined map and fold,
    // with accumulation from right to left.
    xs.reduceRight((a, x) => {
        const pair = f(a[0])(x);
        return Tuple(pair[0])([pair[1]].concat(a[1]));
    }, Tuple(acc)([]));
```
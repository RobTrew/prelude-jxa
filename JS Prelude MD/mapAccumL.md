```js
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f =>
    // A tuple of an accumulation and a list 
    // obtained by a combined map and fold,
    // with accumulation from left to right.
    acc => xs => [...xs].reduce((a, x) => {
        const pair = f(a[0])(x);
        return Tuple(pair[0])(a[1].concat(pair[1]));
    }, Tuple(acc)([]));
```
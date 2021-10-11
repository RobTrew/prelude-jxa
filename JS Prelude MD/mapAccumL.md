```javascript
// mapAccumL :: (acc -> x -> (acc, y)) -> acc ->
// [x] -> (acc, [y])
const mapAccumL = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from left to right.
    acc => xs => [...xs].reduce(
        (a, x) => {
            const tpl = f(a[0])(x);

            return Tuple(tpl[0])(
                a[1].concat(tpl[1])
            );
        },
        Tuple(acc)([])
    );
```
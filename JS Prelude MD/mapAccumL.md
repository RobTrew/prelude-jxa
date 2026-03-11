```javascript
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from left to right.
    acc => xs => {
        const
            n = xs.length,
            ys = new Array(n);

        let mutableAcc = acc;

        for (let i = 0; i < n; i++) {
            const [nextAcc, y] = f(mutableAcc)(xs[i], i);

            mutableAcc = nextAcc;
            ys[i] = y;
        }

        return [mutableAcc, ys];
    };
```
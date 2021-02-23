```javascript
// replicateM :: Int -> [a] -> [[a]]
const replicateM = n =>
    // Instance for lists (arrays) only here.
    xs => {
        const go = x => 0 >= x ? [
            []
        ] : liftA2List(cons)(
            list(xs)
        )(go(x - 1));

        return go(n);
    };
```
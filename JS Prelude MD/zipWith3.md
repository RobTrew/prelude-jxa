```javascript
// zipWith3 :: (a -> b -> c -> d) ->
// [a] -> [b] -> [c] -> [d]
const zipWith3 = f =>
    xs => ys => zs => Array.from({
        length: Math.min(
            ...[xs, ys, zs].map(x => x.length)
        )
    }, (_, i) => f(xs[i])(ys[i])(zs[i]));
```
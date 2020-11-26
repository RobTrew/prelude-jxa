```javascript
// zipWith :: (a -> a -> a) -> [a] -> [a]
const zipWith = f => {
    // A list with the length of the shorter of 
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    const go = xs =>
        ys => 0 < xs.length ? (
            0 < ys.length ? (
                [f(xs[0])(ys[0])].concat(
                    go(xs.slice(1))(ys.slice(1))
                )
            ) : []
        ) : [];
    return go;
};
```
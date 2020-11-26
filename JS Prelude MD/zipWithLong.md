```javascript
// zipWithLong :: (a -> a -> a) -> [a] -> [a]
const zipWithLong = f => {
    // A list with the length of the *longer* of 
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor, and simply
    // appending any unpaired values.
    const go = xs =>
        ys => 0 < xs.length ? (
            0 < ys.length ? (
                [f(xs[0])(ys[0])].concat(
                    go(xs.slice(1))(ys.slice(1))
                )
            ) : xs
        ) : ys
    return go;
};
```
```javascript
// groupOnKey :: Eq k => (a -> k) -> [a] -> [(k, [a])]
const groupOnKey = f => {
    // A list of (k, [a]) tuples, in which each [a]
    // contains only elements for which f returns the
    // same value, and in which k is that value.
    const go = xs =>
        0 < xs.length ? (() => {
            const
                x = xs[0],
                t = xs.slice(1),
                fx = f(x),
                [yes, no] = span(y => fx === f(y))(t);

            return [[fx, [x, ...yes]]].concat(go(no));
        })() : [];

    return go;
};
```
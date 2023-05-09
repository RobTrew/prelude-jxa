```javascript
// groupOnKey :: Eq k => (a -> k) -> [a] -> [(k, [a])]
const groupOnKey = f => {
    // A list of (k, [a]) tuples, in which each [a]
    // contains only elements for which f returns the
    // same value, and in which k is that value.
    // The concatenation of the [a] in each tuple === xs.
    const go = xs =>
        0 < xs.length ? (() => {
            const
                x = xs[0],
                fx = f(x),
                [yes, no] = span(y => fx === f(y))(
                    xs.slice(1)
                );

            return [[fx, [x, ...yes]]].concat(go(no));
        })() : [];

    return go;
};
```
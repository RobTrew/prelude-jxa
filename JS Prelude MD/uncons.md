```javascript
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    // Just a tuple of the head of xs and its tail,
    // Or Nothing if xs is an empty list.
    const lng = length(xs);

    return (0 < lng) ? (
        Infinity > lng ? (
            // Finite list
            Just(Tuple(xs[0])(xs.slice(1)))
        ) : (() => {
            // Lazy generator
            const nxt = take(1)(xs);

            return 0 < nxt.length ? (
                Just(Tuple(nxt[0])(xs))
            ) : Nothing();
        })()
    ) : Nothing();
};
```
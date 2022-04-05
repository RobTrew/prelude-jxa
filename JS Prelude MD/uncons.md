```javascript
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    // Just a tuple of the head of xs and its tail,
    // Or Nothing if xs is an empty list.
    const lng = length(xs);

    return Boolean(lng) ? (
        Infinity > lng ? (
            // Finite list
            Just(Tuple(xs[0])(xs.slice(1)))
        ) : (() => {
            // Lazy generator
            const nxt = take(1)(xs);

            return Boolean(nxt.length) ? (
                Just(Tuple(nxt[0])(xs))
            ) : Nothing();
        })()
    ) : Nothing();
};
```
```js
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    const lng = length(xs);
    return (0 < lng) ? (
        lng < Infinity ? (
            Just(Tuple(xs[0])(xs.slice(1))) // Finite list
        ) : (() => {
            const nxt = take(1, xs);
            return 0 < nxt.length ? (
                Just(Tuple(nxt[0])(xs))
            ) : Nothing();
        })() // Lazy generator
    ) : Nothing();
};
```
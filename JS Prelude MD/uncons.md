```js
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    const lng = length(xs);
    return (0 < lng) ? (
        Just(
            lng < Infinity ? (
                Tuple(xs[0],  xs.slice(1)) // Finite list
            ) : Tuple(take(1, xs)[0],  xs) // Lazy generator
        )
    ) : Nothing();
};
```
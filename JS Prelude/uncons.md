```js
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs =>
    (0 < xs.length) ? (
        Just(Tuple(xs[0], xs.slice(1)))
    ) : Nothing();
```
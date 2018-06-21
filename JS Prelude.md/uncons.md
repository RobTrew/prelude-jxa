```js
// uncons :: [a] -> Maybe (a, [a])
const uncons = xs =>
    xs.length > 0 ? (
        Just(Tuple(xs[0], xs.slice(1)))
    ) : Nothing();
```
```js
// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce((a, x) => (x > a ? x : a), xs[0]))
    ) : Nothing();
```
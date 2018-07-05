```applescript
-- maximumMay :: Ord a => [a] -> Maybe a
on maximumMay(xs)
    foldl1May(max, xs)
end maximumMay
```

```js
// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(1)
            .reduce((a, x) => (x > a ? x : a), xs[0]))
    ) : Nothing();
```
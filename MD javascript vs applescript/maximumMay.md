```applescript
-- maximumMay :: Ord a => [a] -> Maybe a
on maximumMay(xs)
    foldl1May(max, xs)
end maximumMay
```


```javascript
// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(1).reduce(
            (a, x) => x > a ? (
                x
            ) : a,
            xs[0]
        ))
    ) : Nothing();
```
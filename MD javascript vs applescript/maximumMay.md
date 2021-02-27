```applescript
-- maximumMay :: Ord a => [a] -> Maybe a
on maximumMay(xs)
    foldl1May(max, xs)
end maximumMay
```


```javascript
// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1)
            .reduce((a, y) => (y > a ? y : a), ys[0]))
    ) : Nothing()
)(list(xs));
```
```applescript
-- maximum :: Ord a => [a] -> a
on maximum(xs)
    set ca to current application
    unwrap((ca's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@max.self")
end maximum
```


```javascript
// maximum :: Ord a => [a] -> a
const maximum = xs => (
    // The largest value in a non-empty list.
    ys => 0 < ys.length ? (
        ys.slice(1).reduce(
            (a, y) => y > a ? (
                y
            ) : a, ys[0]
        )
    ) : undefined
)(list(xs));
```
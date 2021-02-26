```applescript
-- minimum :: Ord a => [a] -> a
on minimum(xs)
    set ca to current application
    unwrap((ca's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@min.self")
end minimum
```


```javascript
// minimum :: Ord a => [a] -> a
const minimum = xs => (
    // The least value of xs.
    ys => 0 < ys.length ? (
        ys.slice(1)
        .reduce((a, y) => y < a ? y : a, ys[0])
    ) : null
)(list(xs));
```
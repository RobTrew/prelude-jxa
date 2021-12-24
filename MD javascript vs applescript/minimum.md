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
const minimum = xs =>
    // The least value of xs.
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => x < a ? (
                x
            ) : a,
            xs[0]
        )
    ) : null;
```
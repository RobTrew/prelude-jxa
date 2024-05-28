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
const maximum = xs =>
    // The largest value in a non-empty list.
    0 < xs.length
        ? xs.slice(1).reduce(
            (a, x) => x > a
                ? x
                : a,
            xs[0]
        )
        : undefined;
```
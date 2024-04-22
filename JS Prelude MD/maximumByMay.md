```javascript
// maximumByMay :: (a -> a -> Ordering) ->
// [a] -> Maybe a
const maximumByMay = f =>
    // Nothing, if the list is empty,
    // or just the maximum value when compared
    // in terms of f.
    xs => 0 < xs.length
        ? Just(xs.slice(1).reduce(
            (a, x) => 0 < f(a)(x)
                ? a
                : x,
            xs[0]
        ))
        : Nothing();
```
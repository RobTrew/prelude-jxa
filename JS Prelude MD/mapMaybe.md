```js
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = mf =>
    // A filtered map, retaining only the contents
    // of Just values. (Nothing values discarded).
    xs => xs.reduce(
        (a, x) => maybe(a)(
            j => a.concat(j)
        )(mf(x)),
        []
    );
```
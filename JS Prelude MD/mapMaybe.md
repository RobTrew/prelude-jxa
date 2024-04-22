```javascript
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = mf =>
    // A filtered map, retaining only the contents
    // of Just values. (Nothing values discarded).
    xs => xs.flatMap(x => {
        const mb = mf(x);

        return "Just" in mb
            ? [mb.Just]
            : [];
    });
```
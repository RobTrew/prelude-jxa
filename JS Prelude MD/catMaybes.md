```javascript
// catMaybes :: [Maybe a] -> [a]
const catMaybes = mbs =>
    mbs.flatMap(
        m => m.Nothing ? (
            []
        ) : [m.Just]
    );
```
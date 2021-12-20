```javascript
// lefts :: [Either a b] -> [a]
const lefts = xs =>
    xs.flatMap(
        x => ("Left" in x) ? [
            x.Left
        ] : []
    );
```
```javascript
// lefts :: [Either a b] -> [a]
const lefts = xs =>
    xs.flatMap(
        x => ("Either" === x.type) && (
            undefined !== x.Left
        ) ? [x.Left] : []
    );
```
```javascript
// rights :: [Either a b] -> [b]
const rights = xs =>
    xs.flatMap(
        x => ("Right" in x) ? [
            x.Right
        ] : []
    );
```
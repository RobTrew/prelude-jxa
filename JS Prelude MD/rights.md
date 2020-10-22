```javascript
// rights :: [Either a b] -> [b]
const rights = xs =>
    xs.flatMap(
        x => ('Either' === x.type) && (
            undefined !== x.Right
        ) ? [x.Right] : []
    );
```
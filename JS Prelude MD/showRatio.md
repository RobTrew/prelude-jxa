```js
// showRatio :: Ratio -> String
const showRatio = r =>
    'Ratio' !== r.type ? (
        r.toString()
    ) : r.n.toString() + (
        1 !== r.d ? (
            '/' + r.d.toString()
        ) : ''
    );
```
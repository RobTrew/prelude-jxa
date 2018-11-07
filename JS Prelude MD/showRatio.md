```js
// showRatio :: Ratio -> String
const showRatio = r =>
    r.n.toString() + (
      1 !== r.d ? (
          '/' + r.d.toString()
      ) : ''
    );
```
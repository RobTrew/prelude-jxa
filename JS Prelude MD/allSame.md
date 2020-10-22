```js
// allSame :: [a] -> Bool
const allSame = xs =>
    2 > xs.length || (
        h => xs.slice(1).every(x => h === x)
    )(xs[0]);
```
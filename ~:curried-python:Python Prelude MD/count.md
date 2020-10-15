```js
// count :: Int -> Parser a -> Parser [a]
const count = n =>
    // A list of n successive instances of p.
    p => sequenceP(
        replicate(n)(p)
    );
```
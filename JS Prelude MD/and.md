```js
// and :: [Bool] -> Bool
const and = xs =>
    // True unless any contained value is false.
    xs.every(Boolean);
```
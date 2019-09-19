```js
// and :: [Bool] -> Bool
const and = xs =>
    // True unless any value in xs is false.
    xs.every(Boolean);
```
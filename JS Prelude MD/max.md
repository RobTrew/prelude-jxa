```js
// max :: Ord a => a -> a -> a
const max = a =>
    b => gt(b)(a) ? (
        b
    ) : a;
```
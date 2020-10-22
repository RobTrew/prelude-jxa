```js
// add (+) :: Num a => a -> a -> a
const add = a =>
    // Curried addition.
    b => a + b;
```
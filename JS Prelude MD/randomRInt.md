```js
// randomRInt :: Int -> Int -> IO () -> Int
const randomRInt = low =>
    // The return value of randomRInt is itself
    // a function, which, whenever evaluated,
    // yields a a new pseudo-random integer
    // in the range [m..n].
    high => () => low + Math.floor(
        Math.random() * (1 + (high - low))
    );
```
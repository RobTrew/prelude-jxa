```js
// mod :: Int -> Int -> Int
const mod = n =>
    d => (n % d) + (
        signum(n) === signum(-d) ? (
            d
        ) : 0
    );
```
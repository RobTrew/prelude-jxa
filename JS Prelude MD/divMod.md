```javascript
// divMod :: Int -> Int -> (Int, Int)
const divMod = n => d => {
    // Integer division, truncated toward negative infinity,
    // and integer modulus such that:
    // (x `div` y)*y + (x `mod` y) == x
    const [q, r] = [Math.trunc(n / d), n % d];

    return signum(n) === signum(-d)
        ? Tuple(q - 1)(r + d)
        : Tuple(q)(r);
};
```
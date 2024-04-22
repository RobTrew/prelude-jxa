```javascript
// lcm :: Int -> Int -> Int
const lcm = x =>
    // The smallest positive integer divisible
    // without remainder by both x and y.
    y => (x === 0 || y === 0)
        ? 0
        : Math.abs(Math.floor(x / gcd(x)(y)) * y);
```
```js
// lcm :: Int -> Int -> Int
const lcm = (x, y) =>
   ( x === 0 || y === 0) ? 0 : Math.abs(Math.floor(x / gcd(x, y)) * y);
```
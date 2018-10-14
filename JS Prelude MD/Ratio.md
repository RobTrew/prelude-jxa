```js
// ratio :: Int -> Int -> Ratio Int
const ratio = (n, d) =>
    0 !== d ? (() => {
        const g = gcd(n, d);
        return {
            type: 'Ratio',
            'n': quot(n, g), // numerator
            'd': quot(d, g) // denominator
        }
    })() : undefined;
```
```javascript
// enumFromThenTo :: Int -> Int -> Int -> [Int]
const enumFromThenTo = m =>
    // Integer values enumerated from m to n
    // with a step defined by (nxt - m).
    nxt => n => {
        const d = nxt - m;
        return Array.from({
            length: Math.floor(n - nxt) / d + 2
        }, (_, i) => m + (d * i));
    };
```
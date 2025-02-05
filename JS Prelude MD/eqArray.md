```javascript
// eqArray :: [a] -> [a] -> Bool
    const eqArray = xs =>
        ys => xs.length === ys.length
            ? xs.every((x, i) => x === ys[i])
            : false;
```
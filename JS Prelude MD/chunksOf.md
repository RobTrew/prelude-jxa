```javascript
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n =>
    // xs split into sublists of length n.
    // The last sublist will be short if n 
    // does not evenly divide the length of xs .
    xs => enumFromThenTo(0)(n)(
        xs.length - 1
    ).reduce(
        (a, i) => a.concat([
            xs.slice(i, (i + n))
        ]),
        []
    );
```
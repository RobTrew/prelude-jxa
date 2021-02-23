```javascript
// matching :: [a] -> (a -> Int -> [a] -> Bool)
const matching = pat => {
    // A sequence-matching function for findIndices etc
    // findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
    // -> [1, 4]
    const
        lng = pat.length,
        bln = 0 < lng,
        h = bln ? pat[0] : undefined;

    return x => i => src =>
        bln && h === x && eq(pat)(
            src.slice(i, lng + i)
        );
};
```
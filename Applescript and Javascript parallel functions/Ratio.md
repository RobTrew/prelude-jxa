```applescript
-- ratio :: Int -> Int -> Ratio Int
on ratio(n, d)
    if 0 ≠ d then
        set g to gcd(n, d)
        {type:"Ratio", n:(n div g), d:(d div g)}
    else
        missing value
    end if
end ratio
```

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
```applescript
-- Ratio :: Int -> Int -> Ratio
on Ratio(n, d)
    {type:"Ratio", n:n, d:d}
end Ratio
```

```js
// Ratio :: Int -> Int -> Ratio
const Ratio = (n, d) => ({
    type: 'Ratio',
    'n': n, // numerator
    'd': d // denominator
});
```
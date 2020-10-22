```javascript
// properFracRatio :: Ratio -> (Int, Ratio)
const properFracRatio = nd => {
    const [q, r] = Array.from(quotRem(nd.n, nd.d));
    return Tuple(q, ratio(r, nd.d));
};
```


```applescript
-- properFracRatio :: Ratio -> (Int, Ratio)
on properFracRatio(r)
    set n to n of r
    set d to d of r
    Tuple(n div d, ratio(n mod d, d))
end properFracRatio
```
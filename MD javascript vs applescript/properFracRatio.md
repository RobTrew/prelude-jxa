```applescript
-- properFracRatio :: Ratio -> (Int, Ratio)
on properFracRatio(r)
    set n to n of r
    set d to d of r
    Tuple(n div d, ratio(n mod d, d))
end properFracRatio
```


```javascript
// properFracRatio :: Ratio -> (Int, Ratio)
const properFracRatio = nd => {
    const [q, r] = quotRem(nd.n)(nd.d);

    return Tuple(q)(Ratio(r)(nd.d));
};
```
```javascript
// properFracRatio :: Ratio -> (Int, Ratio)
const properFracRatio = nd => {
    const [q, r] = Array.from(quotRem(nd.n, nd.d));

    return Tuple(q, ratio(r, nd.d));
};
```
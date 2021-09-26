```javascript
// properFracRatio :: Ratio -> (Int, Ratio)
const properFracRatio = nd => {
    const [q, r] = Array.from(quotRem(nd.n)(nd.d));

    return Tuple(q)(Ratio(r)(nd.d));
};
```
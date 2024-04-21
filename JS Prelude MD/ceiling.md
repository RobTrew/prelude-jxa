```javascript
// ceiling :: Num -> Int
const ceiling = x => {
    // The least integer not less than x.
    const
        nr = properFraction(x),
        n = nr[0];

    return 0 < nr[1]
        ? 1 + n
        : n;
};
```
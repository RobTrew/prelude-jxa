```applescript
-- toRatio :: Real -> Ratio
on toRatio(n)
    approxRatio(1.0E-12, n)
end toRatio
```

```js
// toRatio :: Real -> Ratio
const toRatio = n =>
    approxRatio(1e-12)(n);
```
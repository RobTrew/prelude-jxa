```applescript
-- rational :: Num a => a -> Rational
```

```js
// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x) ? x : Number.isInteger(x) ? (
        ratio(x, 1)
    ) : approxRatio(undefined)(x);
```
```js
// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x) ? x : ratio(x, 1);
```
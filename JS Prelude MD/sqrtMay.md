```js
// sqrtMay :: Num -> Maybe Num
const sqrtMay = n =>
    n < 0 ? (
        Nothing()
    ) : Just(Math.sqrt(n));
```
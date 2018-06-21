```js
// recipMay :: Num -> Maybe Num
const recipMay = n =>
    n === 0 ? (
        Nothing()
    ) : Just(1 / n);
```
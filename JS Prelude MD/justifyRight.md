```js
// justifyRight :: Int -> Char -> String -> String
const justifyRight = n => cFiller => s =>
    n > s.length ? (
        s.padStart(n, cFiller)
    ) : s;
```
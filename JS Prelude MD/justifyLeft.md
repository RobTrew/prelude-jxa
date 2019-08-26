```js
// justifyLeft :: Int -> Char -> String -> String
const justifyLeft = n => cFiller => s =>
    n > s.length ? (
        s.padEnd(n ,cFiller)
    ) : s;
```
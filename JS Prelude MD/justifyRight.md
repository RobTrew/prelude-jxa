```js
// justifyRight :: Int -> Char -> String -> String
const justifyRight = (n, cFiller, strText) =>
    n > strText.length ? (
        (cFiller.repeat(n) + strText)
        .slice(-n)
    ) : strText;
```
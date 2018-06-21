```js
// justifyLeft :: Int -> Char -> String -> String
const justifyLeft = (n, cFiller, strText) =>
    n > strText.length ? (
        (strText + cFiller.repeat(n))
        .substr(0, n)
    ) : strText;
```
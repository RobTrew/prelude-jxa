```applescript
-- justifyLeft :: Int -> Char -> String -> String
on justifyLeft(n, cFiller, strText)
    if n > length of strText then
        text 1 thru n of (strText & replicate(n, cFiller))
    else
        strText
    end if
end justifyLeft
```

```js
// justifyLeft :: Int -> Char -> String -> String
const justifyLeft = (n, cFiller, strText) =>
    n > strText.length ? (
        (strText + cFiller.repeat(n))
        .substr(0, n)
    ) : strText;
```
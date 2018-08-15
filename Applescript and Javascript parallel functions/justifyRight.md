```applescript
-- justifyRight :: Int -> Char -> String -> String
on justifyRight(n, cFiller, strText)
    if n > length of strText then
        text -n thru -1 of ((replicate(n, cFiller) as text) & strText)
    else
        strText
    end if
end justifyRight
```

```js
// justifyRight :: Int -> Char -> String -> String
const justifyRight = (n, cFiller, s) =>
    n > s.length ? (
        s.padStart(n, cFiller)
    ) : s;
```
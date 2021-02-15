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


```javascript
// justifyRight :: Int -> Char -> String -> String
const justifyRight = n =>
    // The string s, preceded by enough padding (with
    // the character c) to reach the string length n.
    c => s => n > s.length ? (
        s.padStart(n, c)
    ) : s;
```
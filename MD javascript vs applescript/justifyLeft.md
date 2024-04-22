```javascript
// justifyLeft :: Int -> Char -> String -> String
const justifyLeft = n =>
    // The string s, followed by enough padding (with
    // the character c) to reach the string length n.
    c => s => n > s.length
        ? s.padEnd(n, c)
        : s;
```


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
```applescript
-- intToDigit :: Int -> Char
on intToDigit(n)
    if n ≥ 0 and n < 16 then
        character (n + 1) of "0123456789ABCDEF"
    else
        "?"
    end if
end intToDigit
```


```javascript
// intToDigit :: Int -> Char
const intToDigit = n =>
    n >= 0 && n < 16 ? (
        '0123456789ABCDEF'.charAt(n)
    ) : '?';
```
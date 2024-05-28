```applescript
-- justifyRight :: Int -> Char -> String -> String
on justifyRight(n, cFiller)
    script
        on |λ|(txt)
            if n > length of txt then
                text -n thru -1 of ((replicate(n, cFiller) as text) & txt)
            else
                txt
            end if
        end |λ|
    end script
end justifyRight
```


```javascript
// justifyRight :: Int -> Char -> String -> String
const justifyRight = n =>
    // The string s, preceded by enough padding (with
    // the character c) to reach the string length n.
    c => s => n > s.length
        ? s.padStart(n, c)
        : s;
```
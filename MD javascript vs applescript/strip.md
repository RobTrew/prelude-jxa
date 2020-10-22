```javascript
// strip :: String -> String
const strip = s =>
    s.trim();
```


```applescript
-- strip :: String -> String
on strip(s)
    script isSpace
        on |λ|(c)
            set i to id of c
            32 = i or (9 ≤ i and 13 ≥ i)
        end |λ|
    end script
    dropWhile(isSpace, dropWhileEnd(isSpace, s))
end strip
```
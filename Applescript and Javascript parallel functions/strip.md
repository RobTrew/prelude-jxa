```applescript
-- strip :: String -> String
on strip(s)
    script isSpace
        on |λ|(c)
            set i to id of c
            i = 32 or (i ≥ 9 and i ≤ 13)
        end |λ|
    end script
    dropWhile(isSpace, dropWhileEnd(isSpace, s))
end strip
```

```js
// strip :: String -> String
const strip = s => s.trim();
```
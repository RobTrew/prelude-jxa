```applescript
-- quoted :: Char -> String -> String
on quoted(c)
    -- A string flanked on both sides
    -- by a specified quote character.
    script
        on |λ|(s)
            c & s & c
        end |λ|
    end script
end quoted
```


```javascript
// quoted :: Char -> String -> String
const quoted = c =>
    // A string flanked on both sides
    // by a specified quote character.
    s => c + s + c;
```
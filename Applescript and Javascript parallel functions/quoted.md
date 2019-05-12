```applescript
-- quoted :: Char -> String -> String
on quoted(c, s)
    -- string flanked on both sides
    -- by a specified quote character.
    c & s & c
end quoted
```

```js
// quoted :: Char -> String -> String
const quoted = c =>
    // A string flanked on both sides
    // by a specified quote character.
    s => c + s + c
```
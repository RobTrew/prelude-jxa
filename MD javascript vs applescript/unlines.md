```javascript
// unlines :: [String] -> String
const unlines = xs =>
    // A single string formed by the intercalation
    // of a list of strings with the newline character.
    xs.join("\n");
```


```applescript
-- unlines :: [String] -> String
on unlines(xs)
    -- A single string formed by the intercalation
    -- of a list of strings with the newline character.
    set {dlm, my text item delimiters} to ¬
        {my text item delimiters, linefeed}
    set s to xs as text
    set my text item delimiters to dlm
    s
end unlines
```
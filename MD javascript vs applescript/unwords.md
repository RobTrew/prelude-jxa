```javascript
// unwords :: [String] -> String
const unwords = xs =>
    // A space-separated string derived
    // from a list of words.
    xs.join(" ");
```


```applescript
-- unwords :: [String] -> String
on unwords(xs)
    set {dlm, my text item delimiters} to ¬
        {my text item delimiters, space}
    set s to xs as text
    set my text item delimiters to dlm
    return s
end unwords
```
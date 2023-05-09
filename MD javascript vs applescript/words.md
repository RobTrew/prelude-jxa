```javascript
// words :: String -> [String]
const words = s =>
    // List of space-delimited sub-strings.
    // Leading and trailling space ignored.
    s.split(/\s+/u).filter(Boolean);
```


```applescript
-- words :: String -> [String]
on |words|(s)
    set ca to current application
    (((ca's NSString's stringWithString:(s))'s ¬
        componentsSeparatedByCharactersInSet:(ca's ¬
            NSCharacterSet's whitespaceAndNewlineCharacterSet()))'s ¬
        filteredArrayUsingPredicate:(ca's ¬
            NSPredicate's predicateWithFormat:"0 < length")) as list
end |words|
```
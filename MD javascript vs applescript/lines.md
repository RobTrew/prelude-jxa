```javascript
// lines :: String -> [String]
const lines = s =>
    // A list of strings derived from a single string
    // which is delimited by \n or by \r\n or \r.
    Boolean(s.length) ? (
        s.split(/\r\n|\n|\r/u)
    ) : [];
```


```applescript
-- lines :: String -> [String]
on |lines|(xs)
    paragraphs of xs
end |lines|
```
```javascript
// lines :: String -> [String]
const lines = s =>
    // A list of strings derived from a single
    // string delimited by newline and or CR.
    0 < s.length ? (
        s.split(/[\r\n]+/)
    ) : [];
```


```applescript
-- lines :: String -> [String]
on |lines|(xs)
    paragraphs of xs
end |lines|
```
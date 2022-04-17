```applescript
-- NB this does not model any regional or cultural conventions.
-- It simply simply capitalizes the first character of each word.
-- toTitle :: String -> String
on toTitle(str)
    set ca to current application
    ((ca's NSString's stringWithString:(str))'s ¬
        capitalizedStringWithLocale:(ca's NSLocale's currentLocale())) as text
end toTitle
```


```javascript
// toTitle :: String -> String
const toTitle = s =>
    Boolean(s.length) ? (
        `${toUpper(s[0])}${toLower(s.slice(1))}`
    ) : "";
```
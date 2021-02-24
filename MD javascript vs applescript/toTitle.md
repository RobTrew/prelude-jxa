```javascript
// toTitle :: String -> String
const toTitle = s =>
    // NB this does not model any regional or cultural conventions.
    // It simply simply capitalizes the first character of each word.
    regexMatches(/(\w)(\w*)(\b[\W]*|$)/gu)(s)
    .map(ms => ms[1].toUpperCase() + ms[2].toLowerCase() + ms[3])
    .join("");
```


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
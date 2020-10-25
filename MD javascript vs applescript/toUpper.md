```applescript
-- toUpper :: String -> String
on toUpper(str)
    set ca to current application
    ((ca's NSString's stringWithString:(str))'s ¬
        uppercaseStringWithLocale:(ca's NSLocale's currentLocale())) as text
end toUpper
```


```javascript
// toUpper :: String -> String
const toUpper = s =>
    s.toLocaleUpperCase();
```
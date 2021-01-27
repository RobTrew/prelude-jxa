```applescript
-- toUpper :: String -> String
on toUpper(str)
    tell current application
        ((its (NSString's stringWithString:(str)))'s ¬
            uppercaseStringWithLocale:(its NSLocale's currentLocale())) as text
    end tell
end toUpper
```


```javascript
// toUpper :: String -> String
const toUpper = s =>
    s.toLocaleUpperCase();
```
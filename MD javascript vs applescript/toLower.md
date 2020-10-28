```javascript
// toLower :: String -> String
const toLower = s =>
    // Lower-case version of string.
    s.toLocaleLowerCase();
```


```applescript
-- toLower :: String -> String
on toLower(str)
    -- String in lower case. 
    tell current application
        ((its (NSString's stringWithString:(str)))'s ¬
            lowercaseStringWithLocale:(its NSLocale's currentLocale())) as text
    end tell
end toLower
```
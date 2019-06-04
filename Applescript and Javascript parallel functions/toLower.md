```applescript
-- toLower :: String -> String
on toLower(str)
    -- String in lower case. 
    set ca to current application
    ((ca's NSString's stringWithString:(str))'s ¬
        lowercaseStringWithLocale:(ca's NSLocale's currentLocale())) as text
end toLower
```

```js
// toLower :: String -> String
const toLower = s => s.toLocaleLowerCase();
```
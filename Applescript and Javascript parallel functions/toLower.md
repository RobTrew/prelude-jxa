```applescript
-- toLower :: String -> String
on toLower(str)
    set ca to current application
    ((ca's NSString's stringWithString:(str))'s ¬
        lowercaseStringWithLocale:(ca's NSLocale's currentLocale())) as text
end toLower
```

```js
// toLower :: String -> String
const toLower = s => s.toLowerCase();
```
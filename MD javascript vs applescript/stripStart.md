```javascript
// stripStart :: String -> String
const stripStart = s =>
    s.trimStart();
```


```applescript
-- stripStart :: String -> String
on stripStart(s)
    dropWhile(my isSpace, s)
end stripStart
```
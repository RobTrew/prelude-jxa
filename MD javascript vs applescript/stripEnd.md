```javascript
// stripEnd :: String -> String
const stripEnd = s =>
    s.trimEnd();
```


```applescript
-- stripEnd :: String -> String
on stripEnd(s)
    dropWhileEnd(my isSpace, s)
end stripEnd
```
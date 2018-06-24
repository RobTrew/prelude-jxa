```applescript
-- stripEnd :: String -> String
on stripEnd(s)
    dropWhileEnd(my isSpace, s)
end stripEnd
```

```js
// stripEnd :: String -> String
const stripEnd = s => dropWhileEnd(isSpace, s);
```
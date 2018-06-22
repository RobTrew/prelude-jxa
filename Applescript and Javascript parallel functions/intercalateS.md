```applescript
-- intercalateS :: String -> [String] -> String
on intercalateS(sep, xs)
    set {dlm, my text item delimiters} to {my text item delimiters, sep}
    set s to xs as text
    set my text item delimiters to dlm
    return s
end intercalateS
```

```js
// intercalateS :: String -> [String] -> String
const intercalateS = (s, xs) =>
    xs.join(s);
```
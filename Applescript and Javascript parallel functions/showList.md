```applescript
-- showList :: [a] -> String
on showList(xs)
    "[" & intercalateS(", ", map(show, xs)) & "]"
end showList
```

```js
// showList :: [a] -> String
const showList = x => show(x);
```
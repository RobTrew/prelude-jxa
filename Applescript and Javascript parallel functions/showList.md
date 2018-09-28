```applescript
-- showList :: [a] -> String
on showList(xs)
    "[" & intercalateS(", ", map(my show, xs)) & "]"
end showList
```

```js
// showList :: [a] -> String
const showList = x => show(x);
```
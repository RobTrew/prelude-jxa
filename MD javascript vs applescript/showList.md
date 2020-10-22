```javascript
// showList :: [a] -> String
const showList = xs =>
    '[' + xs.map(show)
    .join(', ')
    .replace(/[\"]/g, '') + ']';
```


```applescript
-- showList :: [a] -> String
on showList(xs)
    "[" & intercalateS(", ", map(my show, xs)) & "]"
end showList
```
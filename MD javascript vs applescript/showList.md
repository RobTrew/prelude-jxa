```javascript
// showList :: [a] -> String
const showList = xs => {
    const
        s = xs.map(show)
        .join(", ")
        .replace(/[\\"]/gu, "");

    return `[${s}]`;
};
```


```applescript
-- showList :: [a] -> String
on showList(xs)
    "[" & intercalateS(", ", map(my show, xs)) & "]"
end showList
```
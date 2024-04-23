```javascript
// str :: a -> String
const str = x =>
    Array.isArray(x) && x.every(
        v => ("string" === typeof v) && (1 === v.length)
    )
        ? x.join("")
        : null === x
            ? "null"
            : x.toString();
```


```applescript
-- str :: a -> String
on str(x)
    x as string
end str
```
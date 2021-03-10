```applescript
-- head :: [a] -> a
on head(xs)
    if xs = {} then
        missing value
    else
        item 1 of xs
    end if
end head
```


```javascript
// head :: [a] -> a
const head = xs => (
    ys => ys.length ? (
        ys[0]
    ) : undefined
)(list(xs));
```
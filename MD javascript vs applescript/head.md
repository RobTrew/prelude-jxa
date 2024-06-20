```javascript
// head :: [a] -> a
const head = xs =>
    // The first item (if any) in a list.
    0 < xs.length
        ? xs[0]
        : undefined;
```


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
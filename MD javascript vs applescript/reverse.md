```javascript
// reverse :: [a] -> [a]
const reverse = xs =>
    "string" === typeof xs
        ? xs.split("").reverse()
        .join("")
        : xs.slice(0).reverse();
```


```applescript
-- reverse :: [a] -> [a]
on |reverse|(xs)
    if class of xs is text then
        (reverse of characters of xs) as text
    else
        reverse of xs
    end if
end |reverse|
```
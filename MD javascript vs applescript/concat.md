```applescript
-- concat :: [[a]] -> [a]
-- concat :: [String] -> String
on concat(xs)
    set lng to length of xs
    if 0 < lng and string is class of (item 1 of xs) then
        set acc to ""
    else
        set acc to {}
    end if
    repeat with i from 1 to lng
        set acc to acc & item i of xs
    end repeat
    acc
end concat
```


```javascript
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs => (
    ys => 0 < ys.length ? (
        ys.every(Array.isArray) ? (
            []
        ) : ''
    ).concat(...ys) : ys
)(list(xs));
```
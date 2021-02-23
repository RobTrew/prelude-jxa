```javascript
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length || Array.isArray(xs) ? (
        (
            xs.every(x => "string" === typeof x) ? (
                ""
            ) : []
        ).concat(...xs)
    ) : xs;
```


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
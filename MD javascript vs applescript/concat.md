```applescript
-- concat :: [[a]] -> [a]
on concat(xs)
    ((current application's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@unionOfArrays.self") as list
end concat
```


```javascript
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length ? (
        (
            xs.every(x => "string" === typeof x) ? (
                ""
            ) : []
        ).concat(...xs)
    ) : xs;
```
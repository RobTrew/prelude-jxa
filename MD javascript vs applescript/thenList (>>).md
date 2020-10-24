```javascript
// thenList (>>) :: [a] -> [b] -> [b]
const thenList = xs => ys =>
    list(xs).flatMap(_ => list(ys));
```


```applescript
-- thenList (>>) :: [a] -> [b] -> [b]
on thenList(xs, ys)
    script
        on |λ|(_)
            ys
        end |λ|
    end script
    concatMap(result, xs)
end thenList
```
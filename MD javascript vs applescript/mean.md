```applescript
-- mean :: [Num] -> Num
on mean(xs)
    script
        on |λ|(a, x)
            a + x
        end |λ|
    end script
    foldl(result, 0, xs) / (length of xs)
end mean
```


```javascript
// mean :: [Num] -> Num
const mean = xs => (
    ys => ys.reduce((a, y) => a + y, 0) / ys.length
)(list(xs));
```
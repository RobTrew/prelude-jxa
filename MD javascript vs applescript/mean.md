```applescript
-- mean :: [Num] -> Num
on mean(xs)
    set ca to current application
    ((ca's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@avg.self") as real
end mean
```


```javascript
// mean :: [Num] -> Num
const mean = xs => (
    ys => ys.reduce((a, y) => a + y, 0) / ys.length
)(list(xs));
```
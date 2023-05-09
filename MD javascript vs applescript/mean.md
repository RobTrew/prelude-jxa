```javascript
// mean :: [Num] -> Num
const mean = xs =>
    xs.reduce(
        (a, x) => a + x,
        0
    ) / xs.length;
```


```applescript
-- mean :: [Num] -> Num
on mean(xs)
    set ca to current application
    ((ca's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@avg.self") as real
end mean
```
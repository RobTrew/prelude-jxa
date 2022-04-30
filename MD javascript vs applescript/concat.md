```applescript
-- concat :: [[a]] -> [a]
on concat(xs)
    ((current application's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@unionOfArrays.self") as list
end concat
```


```javascript
// concat :: [[a]] -> [a]
const concat = xs =>
    xs.flat(1);
```
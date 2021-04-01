```applescript
-- nub :: [a] -> [a]
on nub(xs)
    ((current application's NSArray's arrayWithArray:xs)'s ¬
        valueForKeyPath:"@distinctUnionOfObjects.self") as list
end nub
```


```javascript
// nub :: [a] -> [a]
const nub = xs =>
    [...new Set(xs)]
```
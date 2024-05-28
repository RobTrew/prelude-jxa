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
    // The concatenation of all the lists
    // in a list of lists.
    xs.flat(1);
```
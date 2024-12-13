```javascript
// deleteAt :: Int -> [a] -> [a]
const deleteAt = i =>
    // A copy of xs without any element at i, 
    // if i is a valid index.
    xs => xs.slice(0, i).concat(
        xs.slice(1 + i)
    );
```


```applescript
-- deleteAt :: Int -> [a] -> [a]
on deleteAt(i, xs)
    set lr to splitAt(i, xs)
    set {l, r} to {|1| of lr, |2| of lr}
    if 1 < length of r then
        l & items 2 thru -1 of r
    else
        l
    end if
end deleteAt
```
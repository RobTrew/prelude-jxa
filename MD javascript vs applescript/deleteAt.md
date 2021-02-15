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


```javascript
// deleteAt :: Int -> [a] -> [a]
const deleteAt = i =>
    xs => i <= xs.length ? (() => {
        const lr = splitAt(i)(xs);
        return lr[0].concat(lr[1].slice(1));
    })() : xs;
```
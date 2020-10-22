```javascript
// or :: [Bool] -> Bool
const or = xs =>
    xs.some(Boolean);
```


```applescript
-- or :: [Bool] -> Bool
on |or|(ps)
    repeat with p in ps
        if p then return true
    end repeat
    return false
end |or|
```
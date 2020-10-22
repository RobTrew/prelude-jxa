```javascript
// and :: [Bool] -> Bool
const and = xs =>
    // True unless any value in xs is false.
    [...xs].every(Boolean);
```


```applescript
-- and :: [Bool] -> Bool
on |and|(xs)
    -- True if every value in the list is true.
    repeat with x in xs
        if not (contents of x) then return false
    end repeat
    return true
end |and|
```
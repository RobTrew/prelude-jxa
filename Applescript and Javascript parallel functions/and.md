```applescript
-- True if every value in the list is true.
```

```applescript
-- and :: [Bool] -> Bool
on |and|(xs)
    repeat with x in xs
        if not (contents of x) then return false
    end repeat
    return true
end |and|
```

```js
// and :: [Bool] -> Bool
const and = xs =>
    // True unless any contained value is false.
    xs.every(Boolean);
```
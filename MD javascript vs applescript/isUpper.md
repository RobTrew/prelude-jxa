```javascript
// isUpper :: Char -> Bool
const isUpper = c =>
    // True if c is an upper case character.
    /[A-Z]/.test(c);
```


```applescript
-- isUpper :: Char -> Bool
on isUpper(c)
    set d to (id of c) - 65 -- id of "A"
    d ≥ 0 and d < 26
end isUpper
```
```applescript
-- isLower :: Char -> Bool
on isLower(c)
    set d to (id of c) - 97 -- id of "a"
    d ≥ 0 and d < 26
end isLower
```


```javascript
// isLower :: Char -> Bool
const isLower = c =>
    // True if c is a lower case character.
    (/[a-z]/u).test(c);
```
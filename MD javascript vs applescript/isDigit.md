```applescript
-- isDigit :: Char -> Bool
on isDigit(c)
    set n to (id of c)
    48 ≤ n and 57 ≥ n
end isDigit
```


```javascript
// isDigit :: Char -> Bool
const isDigit = c => {
    const n = c.codePointAt(0);
    return 48 <= n && 57 >= n;
};
```
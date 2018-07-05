```applescript
-- isDigit :: Char -> Bool
on isDigit(c)
    set n to (id of c)
    48 ≤ n and 57 ≥ n
end isDigit
```

```js
// isDigit :: Char -> Bool
const isDigit = c => {
  const n = ord(c);
  return 48 <= n && 57 >= n;
};
```
```applescript
-- isDigit :: Char -> Bool
on isDigit(c)
    set d to (id of c) - 48 -- id of "0"
    d ≥ 0 and d ≤ 9
end isDigit
```

```js
// isDigit :: Char -> Bool
const isDigit = c => {
  const n = ord(c);
  return n >= 48 && n <= 57;
};
```
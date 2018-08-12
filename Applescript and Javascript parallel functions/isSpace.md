```applescript
-- isSpace :: Char -> Bool
on isSpace(c)
    set i to id of c
    32 = i or (9 ≤ i and 13 ≥ i)
end isSpace
```

```js
// isSpace :: Char -> Bool
const isSpace = c => /\s/.test(c);
```
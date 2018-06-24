```applescript
-- isSpace :: Char -> Bool
on isSpace(c)
    set i to id of c
    i = 32 or (i ≥ 9 and i ≤ 13)
end isSpace
```

```js
// isSpace :: Char -> Bool
const isSpace = c => /\s/.test(c);
```
```applescript
-- ord :: Char -> Int
on ord(c)
    id of c
end ord
```


```javascript
// ord :: Char -> Int
const ord = c =>
    // Unicode ordinal value of the character.
    c.codePointAt(0);
```
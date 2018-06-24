```applescript
-- isChar :: a -> Bool
on isChar(x)
    class of x is string and length of x is 1
end isChar
```

```js
// isChar :: a -> Bool
const isChar = x =>
    ('string' === typeof x) && (1 === x.length);
```
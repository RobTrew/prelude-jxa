```applescript
-- notElem :: Eq a => a -> [a] -> Bool
on notElem(x, xs)
    xs does not contain x
end notElem
```


```javascript
// notElem :: Eq a => a -> [a] -> Bool
const notElem = x =>
    xs => !xs.includes(x);
```
```applescript
-- notElem :: Eq a => a -> [a] -> Bool
on notElem(x, xs)
    xs does not contain x
end notElem
```

```js
// notElem :: Eq a => a -> [a] -> Bool
const notElem = (x, xs) => -1 === xs.indexOf(x);
```
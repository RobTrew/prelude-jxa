```js
// notElem :: Eq a => a -> [a] -> Bool
const notElem = (x, xs) =>
    !xs.includes(x);
```
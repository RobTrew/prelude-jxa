```js
// deleteFirst :: a -> [a] -> [a]
const deleteFirst = (x, xs) =>
    xs.length > 0 ? (
        x === xs[0] ? (
            xs.slice(1)
        ) : [xs[0]].concat(deleteFirst(x, xs.slice(1)))
    ) : [];
```
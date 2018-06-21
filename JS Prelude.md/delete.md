```js
// xs with first instance of x (if any) removed
```

```js
// delete :: Eq a => a -> [a] -> [a]
const delete_ = (x, xs) =>
    xs.length > 0 ? (
        (x === xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(delete_(x, xs.slice(1)))
    ) : [];
```
```js
// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp => x => ys => {
    for (var i = 0, lng = ys.length; i < lng && cmp(x, ys[i]) > 0; i++) {};
    return ys.slice(0, i)
        .concat(x)
        .concat(ys.slice(i));
};
```
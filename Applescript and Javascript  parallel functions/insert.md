```applescript
-- insert :: Ord a => a -> [a] -> [a]on insert(x, ys)	insertBy(my compare, x, ys)end insert
```

```js
// insert :: Ord a => a -> [a] -> [a]
const insert = (x, ys) => {
    const cmp = (a, b) => a < b ? -1 : (a > b ? 1 : 0);
    for (var i = 0, lng = ys.length; i < lng && cmp(x, ys[i]) > 0; i++) {};
    return ys.slice(0, i)
        .concat(x)
        .concat(ys.slice(i));
};
```
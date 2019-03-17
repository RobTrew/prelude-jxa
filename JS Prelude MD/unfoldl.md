```js
// unfoldl(x => 0 !== x ? Just([x - 1, x]) : Nothing(), 10);
// --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```js
// unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
const unfoldl = (f, v) => {
    let
        xr = [v, v],
        xs = [];
    while (true) {
        const mb = f(xr[0]);
        if (mb.Nothing) {
            return xs
        } else {
            xr = mb.Just;
            xs = [xr[1]].concat(xs);
        }
    }
};
```
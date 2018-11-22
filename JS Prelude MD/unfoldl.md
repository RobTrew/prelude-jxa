```js
// (x => Maybe [value, remainder] -> initial value -> values
```

```js
// unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
const unfoldl = (f, v) => {
    let xs = [];
    return (
        until(
            mb => mb.Nothing,
            mb => (
                xs = [mb.Just[1]].concat(xs),
                f(mb.Just[1])
            ), Just(Tuple(v, v))
        ),
        xs.slice(1)
    );
};
```
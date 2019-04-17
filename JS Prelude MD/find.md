```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    for (let i = 0, lng = xs.length; i < lng; i++) {
        const v = xs[i];
        if (p(v)) return Just(v);
    }
    return Nothing();
};
```
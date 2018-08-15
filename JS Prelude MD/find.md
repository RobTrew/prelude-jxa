```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    for (let i = 0, lng = xs.length; i < lng; i++) {
        if (p(xs[i])) return Just(xs[i]);
    }
    return Nothing();
};
```
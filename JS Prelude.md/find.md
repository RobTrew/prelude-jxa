```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    for (let i = 0, lng = xs.length; i < lng; i++) {
        let x = xs[i];
        if (p(x)) return Just(x);
    }
    return Nothing();
};
```
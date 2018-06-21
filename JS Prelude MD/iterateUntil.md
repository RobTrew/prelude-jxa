```js
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = (p, f, x) => {
    const vs = [x];
    let h = x;
    while (!p(h))(h = f(h), vs.push(h));
    return vs;
};
```
```js
// takeWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const takeWhileGen = (p, xs) => {
    const ys = [];
    let
        nxt = xs.next(),
        v = nxt.value;
    while (!nxt.done && p(v)) {
        ys.push(v);
        nxt = xs.next();
        v = nxt.value
    }
    return ys;
};
```
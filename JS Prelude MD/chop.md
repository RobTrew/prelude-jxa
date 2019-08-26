```js
// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f => as => {
    const go = xs =>
        0 < xs.length ? (() => {
            const [b, ys] = Array.from(f(xs));
            return cons(b)(go(ys))
        })() : [];
    return go(as);
};
```
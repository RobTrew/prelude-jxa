```js
// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => {
        const ys = list(xs);
        let i = ys.length;
        while (i-- && p(ys[i])) {}
        return ys.slice(i + 1);
    };
```
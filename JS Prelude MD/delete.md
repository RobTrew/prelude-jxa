```javascript
// delete :: Eq a => a -> [a] -> [a]
const delete_ = x => {
    // xs with first instance of x (if any) removed.
    const go = xs =>
        0 < xs.length ? (
            (x === xs[0]) ? (
                xs.slice(1)
            ) : [xs[0]].concat(go(xs.slice(1)))
        ) : [];
    return go;
};
```
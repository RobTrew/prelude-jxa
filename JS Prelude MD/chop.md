```javascript
// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f =>
    // A segmentation of xs by tail recursion with a
    // function which returns a (prefix, residue) tuple.
    xs => {
        const go = ys =>
            Boolean(ys.length) ? (() => {
                const [b, bs] = f(ys);

                return [b].concat(go(bs));
            })() : [];

        return go([...xs]);
    };
```
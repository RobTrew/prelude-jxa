```js
// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f =>
    // A segmentation of xs by tail recursion with a
    // function which returns a (prefix, residue) tuple.
    xs => {
        const go = xs =>
            0 < xs.length ? (() => {
                const [b, bs] = Array.from(f(xs));
                return cons(b)(go(bs));
            })() : [];
        return go([...xs]);
    };
```
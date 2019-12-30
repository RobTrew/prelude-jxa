```js
// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f =>
    // A segmentation of xs by tail recursion with a
    // function which returns a (prefix, residue) tuple.
    xs => {
        const go = as =>
            0 < as.length ? (() => {
                const [b, bs] = Array.from(f(as));
                return cons(b)(go(bs))
            })() : [];
        return go(xs);
    };
```
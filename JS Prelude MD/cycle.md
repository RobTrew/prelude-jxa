```javascript
// cycle :: [a] -> Generator [a]
const cycle = function* (xs) {
    // An infinite repetition of xs,
    // from which a prefix of arbitrary
    // length may be drawn.
    const n = xs.length;
    let i = 0;

    while (true) {
        yield xs[i];
        i = (1 + i) % n;
    }
};
```
```javascript
// cycle :: [a] -> Generator [a]
const cycle = function* (xs) {
    // An infinite repetition of xs,
    // from which an arbitrary prefix
    // may be taken.
    const lng = xs.length;
    let i = 0;

    while (true) {
        yield xs[i];
        i = (1 + i) % lng;
    }
};
```
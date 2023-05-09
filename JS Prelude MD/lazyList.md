```javascript
// lazyList :: [a] -> Gen [a]
const lazyList = xs => {
    // The values of a given array
    // lazily yielded one by one.
    const go = function* () {
        const vs = Array.from(xs);

        while (0 < vs.length) {
            yield vs.shift();
        }
    };

    return go();
};
```
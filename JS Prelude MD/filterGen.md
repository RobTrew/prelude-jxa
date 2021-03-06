```javascript
// filterGen :: (a -> Bool) -> Gen [a] -> Gen [a]
const filterGen = p => xs => {
    // Non-finite stream of values which are
    // drawn from gen, and satisfy p
    const go = function* () {
        let x = xs.next();

        while (!x.done) {
            const v = x.value;

            if (p(v)) {
                yield v;
            }
            x = xs.next();
        }
    };

    return go(xs);
};
```
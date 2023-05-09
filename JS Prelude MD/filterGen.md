```javascript
// filterGen :: (a -> Bool) -> Gen [a] -> Gen [a]
const filterGen = p =>
    // A stream of values which are drawn
    // from a generator, and satisfy p.
    xs => {
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
```javascript
// concatMap :: (a -> [b]) -> Gen [a] -> Gen [b]
const concatMapGen = f =>
    // The concatenated map of f over 
    // a stream of generator values.
    function* (gen) {
        let v = gen.next();
        let vs = [];

        while (!v.done) {
            vs = f(v.value);
            if (0 < vs.length) {
                yield vs[0];
            }

            v = gen.next();
        }
    };
```
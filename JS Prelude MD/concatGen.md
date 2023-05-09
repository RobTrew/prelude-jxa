```javascript
// concatGen :: Gen [[a]] -> Gen [a]
const concatGen = gen =>
    // A flattened stream of generator values;
    (function* (g) {
        let m = g.next();

        while (!m.done) {
            const xs = lazyList(m.value);
            let x = xs.next();

            while (!x.done) {
                yield x.value;
                x = xs.next();
            }
            m = g.next();
        }
    }(gen));
```
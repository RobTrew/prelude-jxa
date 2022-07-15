```javascript
// iterate :: (a -> a) -> a -> Gen [a]
const iterate = f =>
    // An infinite list of repeated applications
    // of f, starting with the seed value x.
    function* (x) {
        let v = x;

        while (true) {
            yield v;
            v = f(v);
        }
    };
```
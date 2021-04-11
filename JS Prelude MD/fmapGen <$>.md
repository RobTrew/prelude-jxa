```javascript
// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
const fmapGen = f =>
    // The map of f over a stream of generator values.
    function* (gen) {
        let v = gen.next();

        while (!v.done) {
            yield f(v.value);
            v = gen.next();
        }
    };
```
```javascript
// scanlGen :: (b -> a -> b) -> b -> Gen [a] -> [b]
const scanlGen = f =>
    // The series of interim values arising
    // from a catamorphism over an infinite list.
    startValue => function* (gen) {
        let
            a = startValue,
            x = gen.next();

        yield a;
        while (!x.done) {
            a = f(a)(x.value);
            yield a;
            x = gen.next();
        }
    };
```
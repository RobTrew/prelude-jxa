```javascript
// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
const fmapGen = f =>
    function*(gen) {
        let v = take(1)(gen);
        while (0 < v.length) {
            yield(f(v[0]));
            v = take(1)(gen);
        }
    };
```
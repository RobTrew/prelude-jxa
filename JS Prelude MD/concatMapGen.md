```js
// concatMapGen :: (a -> [b]) -> Gen [a] -> Gen [b]
const concatMapGen = f =>
    function*(xs) {
        let
            x = xs.next(),
            v = undefined;
        while (!x.done) {
            v = f(x.value);
            if (0 < v.length) {
                yield v[0];
            }
            x = xs.next();
        }
    };
```
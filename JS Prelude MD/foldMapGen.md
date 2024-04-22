```javascript
// foldMapGen :: (a -> [b]) -> [a] -> Gen [b]
const foldMapGen = f =>
    // A lazy list of concatenated values
    // obtained by mapping f over xs
    xs => concatGen(
        function* () {
            const ys = [...xs];

            while (0 < ys.length) {
                yield f(ys.shift());
            }
        }(xs)
    );
```
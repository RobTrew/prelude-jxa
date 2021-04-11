```javascript
// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f => startValue => xs =>
    // The series of interim values arising
    // from a catamorphism. Parallel to foldl.
    xs.constructor.name || (
        xs.constructor.constructor.name
    ) !== "GeneratorFunction" ? (
        xs.reduce((a, x) => {
            const v = f(a[0])(x);

            return [v, a[1].concat(v)];
        }, [startValue, [startValue]])[1]
    ) : scanlGen(f)(startValue)(xs);
```
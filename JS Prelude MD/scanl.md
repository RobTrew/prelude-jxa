```javascript
// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f =>
    // The series of interim values arising
    // from a catamorphism. Parallel to foldl.
    startValue => xs =>
        "GeneratorFunction" !== (
            xs.constructor.constructor.name
        )
            ? xs.reduce(
                (a, x) => {
                    const v = f(a[0])(x);

                    return [v, a[1].concat(v)];
                }, [startValue, [startValue]]
            )[1]
            : scanlGen(f)(startValue)(xs);
```
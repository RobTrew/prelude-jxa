```javascript
// takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
const takeFromThenTo = a =>
    b => z => xs => {
        const ixs = enumFromThenTo(a)(b)(z);

        return "GeneratorFunction" !== xs.constructor
        .constructor.name
            ? ixs.map(i => xs[i])
            : (() => {
                const g = zipGen(enumFrom(0))(
                    take(z)(xs)
                );

                return ixs.flatMap(i => {
                    const mb = index(g)(i);

                    return mb.Nothing
                        ? []
                        : [mb.Just];
                });
            })();
    };
```
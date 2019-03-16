```js
// takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
const takeFromThenTo = (a, b, z, xs) => {
    const ixs = enumFromThenTo(a, b, z);
    return 'GeneratorFunction' !== xs.constructor.constructor.name ? (
        map(i => xs[i], ixs)
    ) : (() => {
        const g = zipGen(enumFrom(0), take(z, xs));
        return concatMap(i => {
            const mb = index(g)(i);
            return mb.Nothing ? [] : [mb.Just];
        }, ixs);
    })();
};
```
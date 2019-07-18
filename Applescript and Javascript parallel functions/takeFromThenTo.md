```applescript
-- takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
on takeFromThenTo(a, b, z, xs)
    script go
        on |λ|(i)
            item (1 + i) of xs
        end |λ|
    end script
    map(go, enumFromThenTo(a, b, z))
end takeFromThenTo
```

```js
// takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
const takeFromThenTo = (a, b, z, xs) => {
    const ixs = enumFromThenTo(a, b, z);
    return 'GeneratorFunction' !== xs.constructor.constructor.name ? (
        map(i => xs[i], ixs)
    ) : (() => {
        const g = zipGen(enumFrom(0), take(z, xs));
        return ixs.flatMap(i => {
            const mb = index(g)(i);
            return mb.Nothing ? [] : [mb.Just];
        });
    })();
};
```
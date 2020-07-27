```js
// takeWhile :: (a -> Bool) -> [a] -> [a]
// takeWhile :: (Char -> Bool) -> String -> String
const takeWhile = p => xs =>
    xs.constructor.constructor.name !==
    'GeneratorFunction' ? (() => {
        const n = xs.length;
        return xs.slice(
            0, 0 < n ? until(
                i => n === i || !p(xs[i])
            )(i => 1 + i)(0) : 0
        );
    })() : takeWhileGen(p)(xs);
```
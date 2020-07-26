```js
// takeWhile :: (a -> Bool) -> [a] -> [a]
// takeWhile :: (Char -> Bool) -> String -> String
const takeWhile = p => xs =>
    xs.constructor.constructor.name !==
    'GeneratorFunction' ? (() => {
        const lng = xs.length;
        return 0 < lng ? xs.slice(
            0,
            until(i => lng === i || !p(xs[i]))(
                i => 1 + i
            )(0)
        ) : xs.slice(0);
    })() : takeWhileGen(p)(xs);
```
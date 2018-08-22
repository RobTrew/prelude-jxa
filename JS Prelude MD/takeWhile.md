```js
// takeWhile :: (a -> Bool) -> [a] -> [a]
// takeWhile :: (Char -> Bool) -> String -> String
const takeWhile = (p, xs) => {
    const lng = xs.length;
    return 0 < lng ? xs.slice(
        0,
        until(
            i => i === lng || !p(xs[i]),
            i => 1 + i,
            0
        )
    ) : [];
};
```
```js
// dropWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (Char -> Bool) -> String -> String
const dropWhile = p =>
    xs => {
        const lng = xs.length;
        return 0 < lng ? xs.slice(
            until(i => i === lng || !p(xs[i]))(
                i => 1 + i
            )(0)
        ) : xs.slice(0);
    };
```
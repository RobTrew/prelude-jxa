```javascript
// dropWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (Char -> Bool) -> String -> String
const dropWhile = p =>
    // The suffix remainining after takeWhile p xs.
    xs => {
        const n = xs.length;

        return xs.slice(
            0 < n ? until(
                i => n === i || !p(xs[i])
            )(i => 1 + i)(0) : 0
        );
    };
```
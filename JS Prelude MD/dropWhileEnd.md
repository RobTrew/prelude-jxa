```js
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> [Char]
const dropWhileEnd = p =>
    // xs without the longest suffix for which
    // p returns true for all elements.
    xs => {
        let i = xs.length;
        while (i-- && p(xs[i])) {}
        return xs.slice(0, i + 1);
    };
```
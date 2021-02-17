```javascript
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> [Char]
const dropWhileEnd = p =>
    // xs without the longest suffix for which
    // p returns true for all elements.
    xs => xs.slice(
        0,
        1 + until(
            i => (0 >= i) || !p(xs[i])
        )(
            x => x - 1
        )(xs.length - 1)
    );
```
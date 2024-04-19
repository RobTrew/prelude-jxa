```javascript
// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = p =>
    // The suffix remaining after takeWhile p xs.
    xs => xs.slice(
        xs.findIndex(x => !p(x))
    );
```
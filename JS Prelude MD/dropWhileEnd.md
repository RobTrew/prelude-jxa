```javascript
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
const dropWhileEnd = p =>
    // xs without the largest suffix in which p holds
    // for every element.
    xs => xs.slice(
        0, 1 + xs.findLastIndex(
            x => !p(x)
        )
    );
```
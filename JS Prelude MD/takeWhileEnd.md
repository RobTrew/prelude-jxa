```javascript
// takeWhileEnd :: (a -> Bool) [a] -> [a]
const takeWhileEnd = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => xs.slice(
        1 + xs.findLastIndex(x => !p(x))
    );
```
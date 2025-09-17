```javascript
// reverse :: [a] -> [a]
const reverse = xs =>
    // A reversed copy of xs
    "string" === typeof xs
        ? xs.split("").reverse().join("")
        : xs.toReversed();
```
```javascript
// tail :: [a] -> [a]
const tail = xs =>
    // A new list consisting of all
    // items of xs except the first.
    "GeneratorFunction" !== xs.constructor
    .constructor.name ? (
        Boolean(xs.length) ? (
            xs.slice(1)
        ) : undefined
    ) : (take(1)(xs), xs);
```
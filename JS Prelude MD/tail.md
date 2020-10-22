```javascript
// tail :: [a] -> [a]
const tail = xs =>
    // A new list consisting of all
    // items of xs except the first.
    'GeneratorFunction' !== xs.constructor
    .constructor.name ? (
        (ys => 0 < ys.length ? ys.slice(1) : [])(
            list(xs)
        )
    ) : (take(1)(xs), xs);
```
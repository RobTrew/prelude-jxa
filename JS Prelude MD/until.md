```javascript
// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = p =>
    // The value resulting from successive applications
    // of f to f(x), starting with a seed value x,
    // and terminating when the result returns true 
    // for the predicate p.
    f => {
        const go = x =>
            p(x) ? x : go(f(x));

        return go;
    };
```
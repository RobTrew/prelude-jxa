```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    // The value resulting from successive applications
    // of f to f(x), starting with a seed value x,
    // and terminating when the result returns true
    // for the predicate p.
    f => x => {
        let v = x;

        const xs = [];

        while (!p(v)) {
            v = f(v);
            xs.push(v);
        }

        return xs;
    };
```
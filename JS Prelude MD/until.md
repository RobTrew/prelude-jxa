```javascript
// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = p =>
    // The value resulting from repeated applications
    // of f to the seed value x, terminating when
    // that result returns true for the predicate p.
    f => x => {
        let v = x;

        while (!p(v)) {
            v = f(v);
        }

        return v;
    };
```
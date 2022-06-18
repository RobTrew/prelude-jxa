```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    // Like `until`, but returns a list of
    // all intermediate values, where until
    // returns only a final value.
    f => x => {
        const
            go = v => p(v) ? (
                v
            ) : [v].concat(go(f(v)));

        return go(x);
    };
```
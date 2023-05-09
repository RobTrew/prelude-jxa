```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    // Like `until`, but returns a list of
    // intermediate values, where until
    // returns only a final value.
    // iterateUntil(x => 5 < x)(x => 2 * x)(1)
    // -> [1, 2, 4, 8]
    f => x => {
        const
            go = v => p(v) ? (
                [v]
            ) : [v, ...go(f(v))];

        return go(x);
    };
```
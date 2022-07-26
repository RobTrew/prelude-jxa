```javascript
// mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
const mapMaybeGen = mf =>
    // A filtered map over a generator, returning only the
    // contents of Just values. (Nothing values discarded).
    function*(gen) {
        let v = take(1)(gen);

        while (Boolean(v.length)) {
            const mb = mf(v[0]);

            if (!("Nothing" in mb)) {
                yield mb.Just;
            }
            v = take(1)(gen);
        }
    };
```
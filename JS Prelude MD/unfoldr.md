```javascript
// unfoldr :: (b -> Maybe (a, b)) -> b -> Gen [a]
const unfoldr = f =>
    // A lazy (generator) list unfolded from a seed value
    // by repeated application of f to a value until no
    // residue remains. Dual to fold/reduce.
    // f returns either Nothing or Just (value, residue).
    // For a strict output list, 
    // wrap with `list` or Array.from
    x => function* () {
        let maybePair = f(x);
        while (!maybePair.Nothing) {
            const pair = maybePair.Just;
            yield pair[0];
            maybePair = f(pair[1]);
        }
    }();
```
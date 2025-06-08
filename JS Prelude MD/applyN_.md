```javascript
// applyN_ :: Int -> (a -> a) -> a -> a
const applyN_ = n =>
    // The value of n applications of f to x.
    // (Church numeral n)
    // Equivalent to:  Array.from({ length: n }).reduce(f, x)
    f => x => {
        let
            v = x,
            i = 0;

        while (i < n) v = f(v), i = 1 + i;

        return v;
    };
```
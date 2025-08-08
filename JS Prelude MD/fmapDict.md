```javascript
// fmapDict :: (a -> b) ->
// {String :: a} -> {String :: b}
const fmapDict = f =>
    // A map of f over every value, 
    // (at any depth) in the given dictionary.
    dict => {
        const go = v =>
            v instanceof Array
                ? v.map(go)
                : v instanceof Object && !(
                    v instanceof Date
                )
                    ? Object.keys(v).reduce(
                        (a, k) => ({
                            ...a,
                            [k]: go(v[k])
                        }),
                        {}
                    )
                    : f(v);

        return go(dict);
    };
```
```js
// maximumOn :: (Ord b) => (a -> b) -> [a] -> a
const maximumOn = f =>
    // The item in xs for which f 
    // returns the highest value.
    xs => {
        const pairs = xs.map(x => [f(x), x]);
        return 0 < pairs.length ? (
            pairs.slice(1).reduce(
                (a, tpl) => tpl[0] > a[0] ? (
                    tpl
                ) : a,
                pairs[0]
            )[1]
        ) : undefined
    };
```
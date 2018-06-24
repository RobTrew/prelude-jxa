```js
// splitOn :: String -> String -> [String]
// splitOn :: a -> [a] -> [[a]]
const splitOn = (needle, haystack) =>
    ('string' === typeof haystack) ? (
        haystack.split(needle)
    ) : (() => {
        const tpl = haystack.reduce(
            (a, x) => needle === x ? Tuple(
                a[0].concat([a[1]]), []
            ) : Tuple(a[0], a[1].concat(x)),
            Tuple([], [])
        );
        return tpl[0].concat([tpl[1]]);
    })();
```
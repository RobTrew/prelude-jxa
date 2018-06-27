```js
// splitOn("\r\n", "a\r\nb\r\nd\r\ne") //--> ["a", "b", "d", "e"]
// splitOn("aaa", "aaaXaaaXaaaXaaa") //--> ["", "X", "X", "X", ""]
// splitOn("x", "x") //--> ["", ""]
// splitOn(5, [1, 5, 9, 2, 6, 5, 3, 5]) //--> [[1], [9, 2, 6], [3], []]
```

```js
// splitOn :: a -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = (needle, haystack) =>
    ('string' === typeof haystack) ? (
        haystack.split(needle)
    ) : (() => {
        const tpl = haystack.reduce(
            (a, x) => eq(needle, x) ? Tuple(
                a[0].concat([a[1]]), []
            ) : Tuple(a[0], a[1].concat(x)),
            Tuple([], [])
        );
        return tpl[0].concat([tpl[1]]);
    })();
```
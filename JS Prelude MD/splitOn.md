```javascript
// splitOn :: [a] -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = pat => src =>
    // A list of the strings delimited by
    // instances of a given pattern in s.
    ("string" === typeof src) ? (
        src.split(pat)
    ) : (() => {
        const
            lng = pat.length,
            [a, b] = findIndices(matching(pat))(src).reduce(
                ([x, y], i) => Tuple(
                    x.concat([src.slice(y, i)])
                )(lng + i),
                Tuple([])(0)
            );

        return a.concat([src.slice(b)]);
    })();
```
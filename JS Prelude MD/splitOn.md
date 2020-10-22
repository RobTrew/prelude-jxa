```javascript
// splitOn :: [a] -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = pat => src =>
    /* A list of the strings delimited by
       instances of a given pattern in s. */
    ('string' === typeof src) ? (
        src.split(pat)
    ) : (() => {
        const
            lng = pat.length,
            tpl = findIndices(matching(pat))(src).reduce(
                (a, i) => Tuple(
                    fst(a).concat([src.slice(snd(a), i)])
                )(lng + i),
                Tuple([])(0)
            );
        return fst(tpl).concat([src.slice(snd(tpl))]);
    })();
```
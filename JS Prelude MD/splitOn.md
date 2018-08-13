```js
// splitOn("\r\n", "a\r\nb\r\nd\r\ne") //--> ["a", "b", "d", "e"]
// splitOn("aaa", "aaaXaaaXaaaXaaa") //--> ["", "X", "X", "X", ""]
// splitOn("x", "x") //--> ["", ""]
// splitOn([3, 1], [1,2,3,1,2,3,1,2,3]) //--> [[1,2],[2],[2,3]]
```

```js
// splitOn :: [a] -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = (pat, src) =>
    ('string' === typeof src) ? (
        src.split(pat)
    ) : (() => {
        const
            lng = pat.length,
            tpl = foldl((a, i) =>

                Tuple(
                    fst(a).concat([src.slice(snd(a), i)]),
                    lng + i
                ), Tuple([], 0),

                findIndices(matching(pat), src)
            );
        return fst(tpl).concat([src.slice(snd(tpl))]);
    })();
```
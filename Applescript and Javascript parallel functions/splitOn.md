```applescript
-- splitOn("\r\n", "a\r\nb\r\nd\r\ne") --> ["a","b","d","e"]
-- splitOn("aaa", "aaaXaaaXaaaXaaa") --> {"", "X", "X", "X", ""}
-- splitOn("x", "x") --> {"", ""}
-- splitOn([3, 1], [1, 2, 3, 1, 2, 3, 1, 2, 3])
--> {{1, 2}, {2}, {2, 3}}
```

```applescript
-- splitOn :: [a] -> [a] -> [[a]]
-- splitOn :: String -> String -> [String]
on splitOn(pat, src)
    if class of src is text then
        set {dlm, my text item delimiters} to ¬
            {my text item delimiters, pat}
        set xs to text items of src
        set my text item delimiters to dlm
        return xs
    else
        set lng to length of pat
        script residue
            on |λ|(a, i)
                Tuple(fst(a) & ¬
                    {init(items snd(a) thru (i) of src)}, lng + i)
            end |λ|
        end script
        set tpl to foldl(residue, ¬
            Tuple({}, 1), findIndices(matching(pat), src))
        return fst(tpl) & {drop(snd(tpl) - 1, src)}
    end if
end splitOn
```

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
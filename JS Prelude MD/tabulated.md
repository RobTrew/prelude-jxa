```js
// tabulated :: String -> (a -> String) ->
//                        (b -> String) ->
//           (a -> b) -> [a] -> String
const tabulated = (s, xShow, fxShow, f, xs) => {
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    const
        ys = map(xShow, xs),
        w = maximumBy(comparing(x => x.length), ys).length,
        rows = zipWith(
            (a, b) => justifyRight(w, ' ', a) + ' -> ' + b,
            ys,
            map(compose(fxShow, f), xs)
        );
    return s + '\n' + unlines(rows);
};
```
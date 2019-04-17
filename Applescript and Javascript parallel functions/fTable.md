```applescript
-- fTable :: String -> (a -> String) -> (b -> String) -> (a -> b) -> [a] -> String
on fTable(s, xShow, fxShow, f, xs)
    set ys to map(xShow, xs)
    set w to maximum(map(my |length|, ys))
    script arrowed
        on |λ|(a, b)
            justifyRight(w, space, a) & " -> " & b
        end |λ|
    end script
    s & linefeed & unlines(zipWith(arrowed, ¬
        ys, map(compose(fxShow, f), xs)))
end fTable
```

```js
// fTable :: String -> (a -> String) -> (b -> String) -> (a -> b) -> [a] -> String
const fTable = (s, xShow, fxShow, f, xs) => {
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    const
        ys = map(xShow, xs),
        w = maximum(map(length, ys));
    return s + '\n' + unlines(
        zipWith(
            (a, b) => justifyRight(w, ' ', a) + ' -> ' + b,
            ys,
            map(compose(fxShow, f), xs)
        )
    );
};
```
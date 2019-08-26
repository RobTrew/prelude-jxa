```js
// fTable :: String -> (a -> String) -> (b -> String) -> (a -> b) -> [a] -> String
const fTable = s => xShow => fxShow => f => xs => {
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    const
        ys = xs.map(xShow),
        w = Math.max(...ys.map(length));
    return s + '\n' + zipWith(
        (a, b) => a.padStart(w, ' ') + ' -> ' + b
    )(ys)(
        xs.map(x => fxShow(f(x)))
    ).join('\n');
};
```
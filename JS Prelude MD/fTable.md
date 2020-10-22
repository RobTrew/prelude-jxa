```js
// fTable :: String -> (a -> String) -> 
// (b -> String) -> (a -> b) -> [a] -> String
const fTable = s =>
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    xShow => fxShow => f => xs => {
        const
            ys = xs.map(xShow),
            w = Math.max(...ys.map(length));
        return s + '\n' + zipWith(
            a => b => a.padStart(w, ' ') + ' -> ' + b
        )(ys)(
            xs.map(x => fxShow(f(x)))
        ).join('\n');
    };
```
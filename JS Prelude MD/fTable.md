```javascript
// fTable :: String -> (a -> String) ->
// (b -> String) -> (a -> b) -> [a] -> String
const fTable = s =>
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    xShow => fxShow => f => xs => {
        const
            ys = xs.map(xShow),
            w = Math.max(...ys.map(y => [...y].length)),
            table = zipWith(
                a => b => `${a.padStart(w, " ")} -> ${b}`
            )(ys)(
                xs.map(x => fxShow(f(x)))
            ).join("\n");

        return `${s}\n${table}`;
    };
```
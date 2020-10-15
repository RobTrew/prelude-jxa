```js
// sequenceP :: [Parser a] -> Parser [a]
const sequenceP = ps =>
    // A single parser for a list of values, derived
    // from a list of parsers for single values.
    Parser(
        s => ps.reduce(
            (a, q) => a.flatMap(
                vr => parse(q)(snd(vr)).flatMap(
                    first(xs => fst(vr).concat(xs))
                )
            ),
            [Tuple([])(s)]
        )
    );
```
```js
// manyTill :: Parser a -> Parser e -> Parser [a]
const manyTill = p =>
    // All of the matches for p before e matches.
    // Wrapping e in lookAhead can preserve any 
    // string which matches e, if it is needed.
    e => {
        const
            scan = () => altP(
                thenP(e)(pureP([]))
            )(
                bindP(
                    p
                )(x => bindP(
                    go
                )(xs => pureP(
                    [x].concat(xs)
                )))
            ),
            go = scan();
        return go;
    };
```
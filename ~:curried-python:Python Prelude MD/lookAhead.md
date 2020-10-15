```js
// lookAhead :: Parser a -> Parser a
const lookAhead = p =>
    // A version of p which parses 
    // without consuming.
    Parser(
        s => p.parser(s).flatMap(
            second(_ => s)
        )
    );
```
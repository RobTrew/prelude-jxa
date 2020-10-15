```js
// sepBy :: Parser a -> Parser b -> Parser [a]
const sepBy = p =>
    // Zero or more occurrences of p, as 
    // separated by (discarded) instances of sep.
    sep => altP(
        sepBy1(p)(sep)
    )(
        pureP([])
    );
```
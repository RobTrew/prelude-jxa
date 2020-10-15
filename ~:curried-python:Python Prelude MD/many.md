```js
// many :: Parser a -> Parser [a]
const many = p => {
    // Zero or more instances of p.
    // Lifts a parser for a simple type of value 
    // to a parser for a list of such values.
    const some_p = p =>
        liftA2P(
            x => xs => [x].concat(xs)
        )(p)(many(p));
    return Parser(
        s => parse(
            0 < s.length ? (
                altP(some_p(p))(pureP([]))
            ) : pureP([])
        )(s)
    );
};
```
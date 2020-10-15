```js
// some :: Parser a -> Parser [a]
const some = p => {
    // One or more instances of p.
    // Lifts a parser for a simple type of value 
    // to a parser for a list of such values.
    const many_p = p =>
        altP(some(p))(pureP([]));
    return Parser(
        s => parse(
            liftA2P(
                x => xs => [x].concat(xs)
            )(p)(many_p(p))
        )(s)
    );
};
```
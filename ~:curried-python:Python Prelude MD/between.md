```js
// between :: Parser open -> Parser close -> 
// Parser a -> Parser a
const between = pOpen =>
    // A version of p which matches between 
    // pOpen and pClose (both discarded).
    pClose => p => thenBindP(pOpen)(
        p
    )(
        compose(thenP(pClose), pureP)
    );
```
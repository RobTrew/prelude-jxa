```js
// thenP (>>) :: Parser a -> Parser b -> Parser b
const thenP = o =>
    // A composite parser in which o just consumes text
    // and then p consumes more and returns a value.
    p => Parser(
        s => parse(o)(s).flatMap(
            vr => parse(p)(vr[1])
        )
    );
```
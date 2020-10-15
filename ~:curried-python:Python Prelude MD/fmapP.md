```js
// fmapP :: (a -> b) -> Parser a -> Parser b  
const fmapP = f =>
    // A new parser derived by the structure-preserving 
    // application of f to the value in p.
    p => Parser(
        s => parse(p)(s).flatMap(
            first(f)
        )
    );
```
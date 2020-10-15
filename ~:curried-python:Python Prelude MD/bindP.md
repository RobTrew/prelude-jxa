```js
// bindP (>>=) :: Parser a -> 
// (a -> Parser b) -> Parser b
const bindP = p =>
    // A new parser obtained by the application of 
    // a function to a Parser-wrapped value.
    // The function must enrich its output, lifting it 
    // into a new Parser.
    // Allows for the nesting of parsers.
    f => Parser(
        s => parse(p)(s).flatMap(
            tpl => parse(f(tpl[0]))(tpl[1])
        )
    );
```
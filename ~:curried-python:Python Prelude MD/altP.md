```js
// altP (<|>) :: Parser a -> Parser a -> Parser a
const altP = p =>
    // p, or q if p doesn't match.
    q => Parser(s => {
        const xs = parse(p)(s);
        return 0 < xs.length ? (
            xs
        ) : parse(q)(s);
    });
```
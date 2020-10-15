```js
// eos :: Parser String
const eos = () =>
    // Matches the end of the input string.
    Parser(
        s => 0 < s.length ? (
            []
        ) : [Tuple('')('')]
    );
```
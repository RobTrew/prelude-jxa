```js
// anyChar :: () -> Parser Char
const anyChar = () =>
    // A single character.
    Parser(
        s => 0 < s.length ? [
            Tuple(s[0])(
                s.slice(1)
            )
        ] : []
    );
```
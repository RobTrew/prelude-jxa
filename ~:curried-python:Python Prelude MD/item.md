```js
// item :: () -> Parser Char
const item = () =>
    // A single character.
    // Synonym of anyChar.
    Parser(
        s => 0 < s.length ? [
            Tuple(s[0])(
                s.slice(1)
            )
        ] : []
    );
```
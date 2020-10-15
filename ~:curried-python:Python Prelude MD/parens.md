```js
// parens :: Parser a -> Parser b
const parens = p =>
    // A parenthesized value of some kind.
    between(
        char('(')
    )(
        char(')')
    )(p);
```
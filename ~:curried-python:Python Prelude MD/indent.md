```js
// indent :: Parser String
const indent = () =>
    // Zero or indentations consisting of
    // tabs or multiples of four spaces.
    many(altP(
        char('\t')
    )(
        string('    ')
    ));
```
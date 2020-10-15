```js
// indentUnit :: Parser String
const indentUnit = () =>
    // Parser for either a tab or four spaces.
    altP(
        string('\t')
    )(
        string('    ')
    );
```
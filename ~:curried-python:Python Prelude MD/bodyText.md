```js
// bodyText :: Parser String
const bodyText = () =>
    // A string of characters containing
    // neither LF nor CR.
    many(noneOf('\n\r'));
```
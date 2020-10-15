```js
// emptyP :: () -> Parser a 
const emptyP = () =>
    // The empty list.
    Parser(_ => []);
```
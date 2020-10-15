```js
// escape :: Parser String
const escape = () =>
    fmapP(concat)(
        sequenceP([char('\\'), item()])
    );
```
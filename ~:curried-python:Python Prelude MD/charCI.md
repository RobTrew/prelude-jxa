```js
// charCI :: Char -> Parser Char
const charCI = x =>
    // A single instance of a particular char,
    // or of its case-shifted equivalent.
    satisfy(
        c => (x.toLocaleLowerCase() === c) || (
            x.toLocaleUpperCase() === c
        )
    );
```
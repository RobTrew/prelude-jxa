```js
// word :: () -> Parser String
const word = () =>
    // A string of characters other
    // than tab or space.
    fmapP(x => x.join(''))(
        some(noneOf(' \t'))
    );
```
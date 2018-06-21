```js
// isAlpha::Char - > Bool
const isAlpha = c =>
    /[A-Za-z0-9\u00C0-\u00FF]/.test(c);
```
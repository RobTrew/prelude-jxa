```js
// option :: a -> Parser a -> Parser a
const option = x =>
    // Either p or the default value x.
    p => altP(p)(pureP(x));
```
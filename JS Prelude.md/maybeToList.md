```js
// The maybeToList function returns an empty list when given
// Nothing or a singleton list when not given Nothing.”
```

```js
// maybeToList :: Maybe a -> [a]
const maybeToList = mb =>
    mb.Nothing ? [] : [mb.Just];
```
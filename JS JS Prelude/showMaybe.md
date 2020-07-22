```js
// showMaybe :: Maybe a -> String
const showMaybe = mb =>
    mb.Nothing ? (
        'Nothing'
    ) : 'Just(' + unQuoted(show(mb.Just)) + ')';
```
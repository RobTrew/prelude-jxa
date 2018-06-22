```js
// showLR :: Either a b -> String
const showLR = lr => {
    const k = lr.Left !== undefined ? (
        'Left'
    ) : 'Right';
    return k + '(' + unQuoted(show(lr[k])) + ')';
};
```
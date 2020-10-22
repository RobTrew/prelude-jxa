```javascript
// showLR :: Either a b -> String
const showLR = lr => {
    const k = undefined !== lr.Left ? (
        'Left'
    ) : 'Right';
    return k + '(' + unQuoted(show(lr[k])) + ')';
};
```
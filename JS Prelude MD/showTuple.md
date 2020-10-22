```javascript
// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + enumFromTo(0)(tpl.length - 1)
    .map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
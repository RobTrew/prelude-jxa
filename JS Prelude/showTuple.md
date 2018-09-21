```js
// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + enumFromToInt(0, tpl.length - 1)
    .map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
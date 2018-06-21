```js
// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + [0, 1].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
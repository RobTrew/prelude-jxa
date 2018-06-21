```js
// showTuple4 :: Tuple4 -> String
const showTuple4 = tpl =>
    '(' + [0, 1, 2, 3].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
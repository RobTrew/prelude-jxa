```js
// showTuple3 :: Tuple3 -> String
const showTuple3 = tpl =>
    '(' + [0, 1, 2].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
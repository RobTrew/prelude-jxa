```js
// showSet :: Set -> String
const showSet = s =>
    intercalate(sort(elems(s)), ['{','}']);
```
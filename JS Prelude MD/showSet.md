```js
// showSet :: Set a -> String
const showSet = oSet =>
    '{' + Array.from(oSet)
    .map(x => x.toString())
    .join(',') + '}';
```
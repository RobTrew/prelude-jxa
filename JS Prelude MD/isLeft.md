```js
// isLeft :: Either a b -> Bool
const isLeft = lr =>
    ('Either' === lr.type) && (undefined !== lr.Left);
```
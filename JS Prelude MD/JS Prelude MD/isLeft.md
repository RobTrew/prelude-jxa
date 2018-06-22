```js
// isLeft :: Either a b -> Bool
const isLeft = lr =>
    lr.type === 'Either' && lr.Left !== undefined;
```
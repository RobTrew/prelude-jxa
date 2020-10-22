```js
// Left :: a -> Either a b
const Left = x => ({
    type: 'Either',
    Left: x
});
```
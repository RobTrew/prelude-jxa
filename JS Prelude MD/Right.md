```js
// Right :: b -> Either a b
const Right = x => ({
    type: 'Either',
    Right: x
});
```
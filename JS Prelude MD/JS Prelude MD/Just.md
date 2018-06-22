```js
// Just :: a -> Just a
const Just = x => ({
    type: 'Maybe',
    Nothing: false,
    Just: x
});
```
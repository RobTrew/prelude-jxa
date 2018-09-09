```js
// Just :: a -> Maybe a
const Just = x => ({
    type: 'Maybe',
    Nothing: false,
    Just: x
});
```
```js
// Ordering :: Int -> Ordering
const Ordering = e => ({
    type: 'Ordering',
    value: 0 > e ? (
        -1
    ) : 0 < e ? (
        1
    ) : 0
});
```
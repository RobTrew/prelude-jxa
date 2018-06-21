```js
// Ordering :: Int -> Ordering
const Ordering = e =>
    ({
        type: 'Ordering',
        value: (e > 0 ? 1 : e < 0 ? -1 : 0)
    });
```
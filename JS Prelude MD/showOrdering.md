```js
// showOrdering :: Ordering -> String
const showOrdering = e =>
    e.value > 0 ? (
        'GT'
    ) : e.value < 0 ? (
        'LT'
    ) : 'EQ';
```
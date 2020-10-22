```javascript
// showOrdering :: Ordering -> String
const showOrdering = e =>
    0 < e.value ? (
        'GT'
    ) : 0 > e.value ? (
        'LT'
    ) : 'EQ';
```
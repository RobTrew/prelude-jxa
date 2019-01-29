```js
// ordering :: () -> Ordering
const
    ordering = namedEnumFromList(
        'Ordering', ['LT', 'EQ', 'GT'],
        [-1, 0, 1]
    ),
    LT = ordering.LT,
    EQ = ordering.EQ,
    GT = ordering.GT;
```
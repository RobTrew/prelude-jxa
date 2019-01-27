```js
// ordering :: () -> Ordering
const
    ordering = namedEnumFromList(
        'Ordering', ['LT', 'EQ', 'GT']
    ),
    LT = ordering.LT,
    EQ = ordering.EQ,
    GT = ordering.GT;
```
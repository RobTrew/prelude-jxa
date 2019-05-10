```applescript
-- ordering :: () -> Ordering
on ordering()
    enumFromPairs("Ordering", {{"LT", -1}, {"EQ", 0}, {"GT", 1}})
end ordering
```

```js
// ordering :: () -> Ordering
const
    ordering = enumFromPairs(
        'Ordering', 
        [['LT', -1], ['EQ', 0], ['GT', 1]]
    ),
    LT = ordering.LT,
    EQ = ordering.EQ,
    GT = ordering.GT;
```
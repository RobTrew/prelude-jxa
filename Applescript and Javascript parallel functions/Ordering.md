```applescript
-- ordering :: () -> Ordering
on ordering()
    enumFromPairs("Ordering", {{"LT", -1}, {"EQ", 0}, {"GT", 1}})
end ordering
```

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
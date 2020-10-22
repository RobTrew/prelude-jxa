```js
// mappendOrd (<>) :: Ordering -> Ordering -> Ordering
const mappendOrd = x =>
    y => 0 !== x ? (
        x
    ) : y;
```
```js
// mappendOrd (<>) :: Ordering -> Ordering -> Ordering
const mappendOrd = cmp =>
    cmp1 => a => b => {
        const x = cmp(a)(b);
        return 0 !== x ? (
            x
        ) : cmp1(a)(b);
    };
```
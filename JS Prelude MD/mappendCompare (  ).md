```js
// mappendCompare (<>) :: (a -> a -> Bool)
// (a -> a -> Bool) -> (a -> a -> Bool)
const mappendCompare = cmp =>
    cmp1 => a => b => {
        const x = cmp(a)(b);
        return 0 !== x ? (
            x
        ) : cmp1(a)(b);
    };
```
```javascript
// mappendComparing (<>) :: (a -> a -> Bool)
// (a -> a -> Bool) -> (a -> a -> Bool)
const mappendComparing = cmp =>
    cmp1 => a => b => {
        const x = cmp(a)(b);

        return 0 !== x ? (
            x
        ) : cmp1(a)(b);
    };
```
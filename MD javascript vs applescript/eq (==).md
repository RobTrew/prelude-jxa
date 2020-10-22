```javascript
// eq (==) :: Eq a => a -> a -> Bool
const eq = a =>
    // True when a and b are equivalent in the terms
    // defined below for their shared data type.
    b => {
        const t = typeof a;
        return t !== typeof b ? (
            false
        ) : 'object' !== t ? (
            'function' !== t ? (
                a === b
            ) : a.toString() === b.toString()
        ) : (() => {
            const kvs = Object.entries(a);
            return kvs.length !== Object.keys(b).length ? (
                false
            ) : kvs.every(([k, v]) => eq(v)(b[k]));
        })();
    };
```


```applescript
-- eq (==) :: Eq a => a -> a -> Bool
on eq(a, b)
    a = b
end eq
```
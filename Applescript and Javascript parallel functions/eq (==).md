```applescript
-- eq (==) :: Eq a => a -> a -> Bool
on eq(a, b)
    a = b
end eq
```

```js
// eq (==) :: Eq a => a -> a -> Bool
const eq = (a, b) => {
    const t = typeof a;
    return t !== typeof b ? (
        false
    ) : 'object' !== t ? (
        a === b
    ) : (() => {
        const aks = Object.keys(a);
        return aks.length !== Object.keys(b).length ? (
            false
        ) : aks.every(k => eq(a[k], b[k]));
    })();
};
```
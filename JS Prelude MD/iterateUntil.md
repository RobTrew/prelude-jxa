```javascript
// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p => f => x => {
    const
        go = v => p(v) ? (
            v
        ) : [v].concat(go(f(v)));

    return go(x);
};
```
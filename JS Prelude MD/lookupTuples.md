```javascript
// lookupTuples :: Eq a => a -> [(a, b)] -> Maybe b
const lookupTuples = k =>
    kvs => {
        const i = kvs.findIndex(kv => k === kv[0]);
        return -1 !== i ? (
            Just(kvs[i][1])
        ) : Nothing();
    };
```
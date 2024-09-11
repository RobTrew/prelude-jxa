```javascript
// enumFromPairs :: String -> [(String, Int)] -> Dict
const enumFromPairs = enumName =>
    kvs => {
        const
            iMax = kvs[kvs.length - 1][1],
            iMin = kvs[0][1];

        return kvs.reduce(
            (a, kv) => ({
                ...a,
                [kv[0]]: {
                    "type": "enum",
                    "name": enumName,
                    "key": kv[0],
                    "max": iMax,
                    "min": iMin,
                    "value": kv[1]
                },
                [kv[1]]: kv[0]
            }), {}
        );
    };
```
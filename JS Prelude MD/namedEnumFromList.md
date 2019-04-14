```js
// namedEnumFromList :: String -> [String] -> [a] -> Dict
const namedEnumFromList = (name, keys, values) => {
    const
        e = {},
        iMax = keys.length - 1;
    return keys.map(
        values ? (
            (k, i) => Tuple(k, values[i])
        ) : Tuple
    ).reduce(
        (a, kv) => Object.assign(
            a, {
                [kv[0]]: {
                    'type': 'enum',
                    'name': name,
                    'key': kv[0],
                    'max' : iMax,
                    'value': kv[1],
                    'enum': e
                },
                [kv[1]]: kv[0]
            }
        ), e
    );
};
```
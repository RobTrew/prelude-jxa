```js
// namedEnumFromList :: String -> [String] -> Dict
const namedEnumFromList = (name, keys, values) => {
    const e = {};
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
                    'value': kv[1],
                    'enum': e
                },
                [kv[1]]: kv[0]
            }
        ), e
    );
};
```
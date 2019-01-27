```js
// Enum :: String -> [String] -> Dict
const Enum = (name, keys, values) =>
    keys.map(
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
                    'enum': keys
                }
            }
        ), {}
    );
```
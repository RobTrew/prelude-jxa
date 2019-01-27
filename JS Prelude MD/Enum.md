```js
// Enum :: String -> [String] -> Dict
const Enum = (name, items) =>
    items.reduce(
        (a, k, i) => Object.assign(
            a, {
                [k]: {
                    'type': 'enum',
                    'name': name,
                    'key': k,
                    'index': i,
                    'enum': items
                }
            }
        ), {}
    );
```
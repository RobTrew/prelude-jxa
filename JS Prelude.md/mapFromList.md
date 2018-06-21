```js
// mapFromList :: [(k, v)] -> Dict
const mapFromList = kvs =>
    kvs.reduce(
        (a, kv) => {
            const k = kv[0];
            return Object.assign(a, {
                [(typeof k === 'string' && k) || show(k)]: kv[1]
            });
        }, {}
    );
```
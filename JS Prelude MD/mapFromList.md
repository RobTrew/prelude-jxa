```js
// mapFromList :: [(k, v)] -> Dict
const mapFromList = kvs =>
    kvs.reduce(
        (a, kv) => {
            const k = kv[0];
            return Object.assign(a, {
                [(('string' === typeof k) && k) || show(k)]: kv[1]
            });
        }, {}
    );
```
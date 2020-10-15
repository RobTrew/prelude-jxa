```js
// tpTextFromTuple :: (String, String) -> String
const tpTextFromTuple = kv => {
    // A plain word, or a TaskPaper tag, 
    // (with or without parenthesised value),
    // reconstructed from a (key, value) tuple,
    // where either k or v may be empty strings.
    const [k, v] = [kv[0], kv[1]];
    return Boolean(k) ? (
        Boolean(v) ? (
            `@${k}(${v})`
        ) : '@' + k
    ) : v;
};
```
```js
// fromEnum :: Enum a => a -> Int
const fromEnum = x => {
    const type = typeof x;
    return 'boolean' === type ? (
        x ? 1 : 0
    ) : 'string' === type ? x.charCodeAt(0) : x;
};
```
```js
// fromEnum :: Enum a => a -> Int
const fromEnum = x => {
    const type = typeof x;
    return type === 'boolean' ? (
        x ? 1 : 0
    ) : type === 'string' ? x.charCodeAt(0) : x;
};
```
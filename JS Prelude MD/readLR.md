```js
// readLR :: Read a => String -> Either String a
const readLR = s => {
    try {
        return Just(JSON.parse(s))
    } catch (e) {
        return Nothing();
    };
};
```
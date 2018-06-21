```js
// readMay :: Read a => String -> Maybe a
const readMay = s => {
    try {
        return Just(JSON.parse(s))
    } catch (e) {
        return Nothing();
    };
};
```
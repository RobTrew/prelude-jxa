```javascript
// evalJSMay :: String -> Maybe a
const evalJSMay = s => {
    try {
        // eslint-disable-next-line no-eval
        return Just(eval(`(${s})`));
    } catch (e) {
        return Nothing();
    }
};
```
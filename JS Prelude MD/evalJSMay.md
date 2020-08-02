```js
// evalJSMay :: String -> Maybe a
const evalJSMay = s => {
    try {
        return Just(eval('(' + s + ')'));
    } catch (e) {
        return Nothing();
    }
};
```
```javascript
// evalJSLR :: String -> Either String a
const evalJSLR = s => {
    try {
        // eslint-disable-next-line no-eval
        return Right(eval(`(${s})`));
    } catch (e) {
        return Left(e.message);
    }
};
```
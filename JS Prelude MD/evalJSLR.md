```js
// evalJSLR :: String -> Either String a
const evalJSLR = s => {
    try {
        return Right(eval('(' + s + ')'))
    } catch (e) {
        return Left(e.message);
    };
};
```
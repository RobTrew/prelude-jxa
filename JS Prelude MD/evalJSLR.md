```js
// evalJSLR :: String -> Either String String
const evalJSLR = s => {
    try {
        return Right(eval('(' + s + ')'))
    } catch (e) {
        return Left(e.message);
    };
};
```
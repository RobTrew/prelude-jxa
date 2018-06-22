```js
// readJSONLR :: Read a => String -> Either String a
const readJSONLR = strJSON => {
    try {
        return Right(JSON.parse(strJSON));
    } catch (e) {
        // message, line, column, stack
        return Left(
            'line:' + e.line +
            ' col:' + e.column + ':\n' + e.message
        );
    }
};
```
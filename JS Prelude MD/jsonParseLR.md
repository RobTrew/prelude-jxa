```javascript
// jsonParseLR :: String -> Either String a
const jsonParseLR = s => {
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(
            unlines([
                e.message,
                `(line:${e.line} col:${e.column})`
            ])
        );
    }
};
```
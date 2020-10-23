```javascript
// jsonParseLR :: String -> Either String a
const jsonParseLR = s => {
    // Either a message, or a JS value obtained
    // from a successful parse of s.
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(
            `${e.message} (line:${e.line} col:${e.column})`
        );
    }
};
```
```js
// readLR :: Read a => String -> Either String a
const readLR = s => {
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(e.message);
    }
};
```
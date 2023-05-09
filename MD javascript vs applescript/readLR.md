```javascript
// readLR :: Read a => String -> Either String a
const readLR = s => {
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(e.message);
    }
};
```


```applescript
-- readLR :: Read a => String -> Either String a
on readLR(s)
    try
        |Right|(run script s)
    on error e
        |Left|(e)
    end try
end readLR
```
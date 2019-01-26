```applescript
-- jsonParseLR :: String -> Either String a
on jsonParseLR(s)
    set ca to current application
    set {x, e} to ca's NSJSONSerialization's ¬
        JSONObjectWithData:((ca's NSString's stringWithString:s)'s ¬
            dataUsingEncoding:(ca's NSUTF8StringEncoding)) ¬
            options:0 |error|:(reference)
    if x is missing value then
        |Left|(e's localizedDescription() as string)
    else
        if 1 = (x's isKindOfClass:(ca's NSArray)) as integer then
            |Right|(x as list)
        else
            |Right|(item 1 of (x as list))
        end if
    end if
end jsonParseLR
```

```js
// jsonParseLR :: String -> Either String a
const jsonParseLR = s => {
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(`${e.message} (line:${e.line} col:${e.column})`);
    }
};
```
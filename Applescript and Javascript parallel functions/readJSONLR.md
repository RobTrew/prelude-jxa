```applescript
-- readJSONLR :: Read a => String -> Either String a
on readJSONLR(strJSON)
    set ca to current application
    set {x, e} to ca's NSJSONSerialization's ¬
        JSONObjectWithData:((ca's NSString's stringWithString:strJSON)'s ¬
            dataUsingEncoding:(ca's NSUTF8StringEncoding)) ¬
            options:0 |error|:(reference)
    
    if x is missing value then
        |Left|(e's localizedDescription() as text)
    else
        if x's isKindOfClass:(ca's NSDictionary) then
            |Right|(x as record)
        else
            |Right|(x as list)
        end if
    end if
end readJSONLR
```

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
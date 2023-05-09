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


```applescript
-- evalJSLR :: String -> Either String a
on evalJSLR(strJS)
    -- gJSC can be declared in the global namespace,
    -- but unless the reference is released before the 
    -- end of the script (e.g. `set gJSC to null`)
    -- it will persist, and
    -- Script Editor will be unable to save a .scpt file
    set gJSC to current application's JSContext's new()
    set v to unwrap((gJSC's evaluateScript:(strJS))'s toObject())
    if v is missing value then
        |Left|("JS evaluation error")
    else
        |Right|(v)
    end if
end evalJSLR
```
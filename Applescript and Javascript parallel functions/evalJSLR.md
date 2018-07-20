```applescript
-- gJSC can be declared in the global namespace,
-- but unless the reference is released before the 
-- end of the script (e.g. `set gJSC to null`)
-- it will persist, and
-- Script Editor will be unable to save a .scpt file
```

```applescript
-- evalJSLR :: String -> Either String a
on evalJSLR(strJS)
    try -- NB if gJSC is global it must be released 
        -- (e.g. set to null) at end of script
        gJSC's evaluateScript
    on error
        set gJSC to current application's JSContext's new()
        log ("new JSC")
    end try
    set v to unwrap((gJSC's evaluateScript:(strJS))'s toObject())
    if v is missing value then
        |Left|("JS evaluation error")
    else
        |Right|(v)
    end if
end evalJSLR
```

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
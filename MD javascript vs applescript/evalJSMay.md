```applescript
-- use framework "Foundation"
-- use framework "JavaScriptCore"

-- gJSC can be declared in the global namespace,
-- but unless the reference is released before the 
-- end of the script (e.g. `set gJSC to null`)
-- it will persist, and
-- Script Editor will be unable to save a .scpt file
-- evalJSMay :: String -> Maybe a
on evalJSMay(strJS)
    try -- NB if gJSC is global it must be released 
        -- (e.g. set to null) at end of script
        gJSC's evaluateScript
    on error
        set gJSC to current application's JSContext's new()
        log ("new JSC")
    end try
    set v to unwrap((gJSC's evaluateScript:(strJS))'s toObject())
    if v is missing value then
        Nothing()
    else
        Just(v)
    end if
end evalJSMay
```


```javascript
// evalJSMay :: String -> Maybe a
const evalJSMay = s => {
    try {
        return Just(eval('(' + s + ')'));
    } catch (e) {
        return Nothing();
    }
};
```
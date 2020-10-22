```javascript
// unwrap :: NSObject -> a
const unwrap = ObjC.unwrap;
```


```applescript
-- unwrap :: NSObject -> a
on unwrap(objCValue)
    if objCValue is missing value then
        missing value
    else
        set ca to current application
        item 1 of ((ca's NSArray's arrayWithObject:objCValue) as list)
    end if
end unwrap
```
```javascript
// showJSON :: a -> String
const showJSON = x =>
    // Indented JSON representation of the value x.
    JSON.stringify(x, null, 2);
```


```applescript
-- showJSON :: a -> Stringon showJSON(x)    set c to class of x    if (c is list) or (c is record) then        set ca to current application        set json to ca's NSJSONSerialization's dataWithJSONObject:x options:1 |error|:(missing value)        if json is missing value then            "Could not serialize as JSON"        else            (ca's NSString's alloc()'s initWithData:json encoding:(ca's NSUTF8StringEncoding)) as text        end if    else if c is date then        "\"" & ((x - (time to GMT)) as «class isot» as string) & ".000Z" & "\""    else if c is text then        "\"" & x & "\""    else if (c is integer or c is real) then        x as text    else if c is class then        "null"    else        try            x as text        on error            ("«" & c as text) & "»"        end try    end ifend showJSON
```
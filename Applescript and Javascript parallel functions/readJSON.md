```applescript
-- readJSON :: String -> a
on readJSON(strJSON)
    set ca to current application
    set {x, e} to ca's NSJSONSerialization's ¬
        JSONObjectWithData:((ca's NSString's stringWithString:strJSON)'s ¬
            dataUsingEncoding:(ca's NSUTF8StringEncoding)) ¬
            options:0 |error|:(reference)
    
    if x is missing value then
        error e's localizedDescription() as text
    else
        if x's isKindOfClass:(ca's NSDictionary) then
            x as record
        else
            x as list
        end if
    end if
end readJSON
```

```js
// readJSON :: String -> a
const readJSON = JSON.parse;
```
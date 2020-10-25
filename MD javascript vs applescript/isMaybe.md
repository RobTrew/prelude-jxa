```javascript
// isMaybe :: a -> Bool
const isMaybe = x =>
    'Maybe' === x.type;
```


```applescript
-- isMaybe :: a -> Bool
on isMaybe(x)
    -- use framework "Foundation"
    -- use scripting additions
    if class of x is record then
        set ca to current application
        set v to ((ca's NSDictionary's ¬
            dictionaryWithDictionary:x)'s ¬
            objectForKey:"type")
        v is not missing value ¬
            and (v's isKindOfClass:(ca's NSString)) ¬
            and (v as string = "Maybe")
    else
      false
    end if
end isMaybe
```
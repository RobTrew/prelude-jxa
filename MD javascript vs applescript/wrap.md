```javascript
// wrap :: a -> NSObject
const wrap = ObjC.wrap;
```


```applescript
-- wrap :: a -> NSObject
on wrap(v)
    set ca to current application
    ca's (NSArray's arrayWithObject:v)'s objectAtIndex:0
end wrap
```
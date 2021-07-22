```applescript
-- elems :: Map k a -> [a]
-- elems :: Set a -> [a]
on elems(x)
    if record is class of x then -- Dict
        tell current application to allValues() ¬
            of dictionaryWithDictionary_(x) ¬
            of its NSDictionary as list
    else -- Set
        (allObjects() of x) as list
    end if
end elems
```


```javascript
// elems :: Map k a -> [a]
// elems :: Set a -> [a]
const elems = x =>
    "Set" !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());
```
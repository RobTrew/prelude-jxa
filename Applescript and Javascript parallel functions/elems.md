```applescript
-- elems :: Dict -> [a]
-- elems :: Set -> [a]
on elems(x)
    if record is class of x then -- Dict
        set ca to current application
        (ca's NSDictionary's dictionaryWithDictionary:rec)'s allValues() as list
    else -- Set
        (x's allObjects()) as list
    end if
end elems
```

```js
// elems :: Dict -> [a]
// elems :: Set -> [a]
const elems = x =>
    'Set' !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());
```
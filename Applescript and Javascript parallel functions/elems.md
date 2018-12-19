```applescript
-- elems :: Dict -> [a]
on elems(rec)
    set ca to current application
    (ca's NSDictionary's dictionaryWithDictionary:rec)'s allValues() as list
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
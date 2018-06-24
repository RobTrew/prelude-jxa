```applescript
-- typeName :: a -> String
on typeName(x)
    set mb to lookup((class of x) as string, ¬
        {|list|:"List", |integer|:"Int", |real|:"Float", |text|:¬
            "String", |string|:"String", |record|:¬
            "Record", |boolean|:"Bool", |handler|:"Function", |script|:"Function"})
    if Nothing of mb then
        "Bottom"
    else
        set k to Just of mb
        if k = "Record" then
            if keys(x) contains "type" then
                type of x
            else
                "Dict"
            end if
        else
            k
        end if
    end if
end typeName
```

```js
// typeName :: a -> String
const typeName = v => {
    const t = typeof v;
    return 'object' === t ? (
        Array.isArray(v) ? (
            'List'
        ) : null !== v ? (
            v.type || 'Dict'
        ) : 'Bottom'
    ) : {
        'boolean': 'Bool',
        'number' : 'Num',
        'string' : 'String'
    }[t] || 'Bottom';
};
```
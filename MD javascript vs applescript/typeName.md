```javascript
// typeName :: a -> String
const typeName = v => {
    const t = typeof v;
    return 'object' === t ? (
        Array.isArray(v) ? (
            'List'
        ) : 'Date' === v.constructor.name ? (
            'Date'
        ) : null !== v ? (
            v.type || 'Dict'
        ) : 'Bottom'
    ) : {
        'boolean': 'Bool',
        'date': 'Date',
        'number': 'Num',
        'string': 'String',
        'function': '(a -> b)'
    } [t] || 'Bottom';
};
```


```applescript
-- typeName :: a -> String
on typeName(x)
    set mb to lookupDict((class of x) as string, ¬
        {|list|:"List", |integer|:"Int", |real|:"Float", |text|:¬
            "String", |string|:"String", |record|:¬
            "Record", |boolean|:"Bool", |handler|:"(a -> b)", |script|:"(a -> b"})
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
```applescript
-- maxBound :: a -> a
on maxBound(x)
    set c to class of x
    if text is c then
        character id 65535
    else if integer is c then
        (2 ^ 29 - 1)
    else if real is c then
        1.797693E+308
    else if boolean is c then
        true
    end if
end maxBound
```


```javascript
// maxBound :: a -> a
const maxBound = x => {
    const e = x.enum;

    return Boolean(e) ? (
        e[e[x.max]]
    ) : {
        "number": Number.MAX_SAFE_INTEGER,
        "string": String.fromCodePoint(0x10FFFF),
        "boolean": true
    }[typeof x];
};
```
```javascript
// fromEnum :: Enum a => a -> Int
const fromEnum = x =>
    typeof x !== "string"
        ? x.constructor === Object
            ? x.value
            : parseInt(Number(x), 10)
        : x.codePointAt(0);
```


```applescript
-- fromEnum :: Enum a => a -> Int
on fromEnum(x)
    set c to class of x
    if c is boolean then
        if x then
            1
        else
            0
        end if
    else if c is text then
        if x ≠ "" then
            id of x
        else
            missing value
        end if
    else
        x as integer
    end if
end fromEnum
```
```applescript
-- showTuple :: Tuple -> String
on showTuple(tpl)
    set ca to current application
    script
        on |λ|(n)
            set v to (ca's NSDictionary's dictionaryWithDictionary:tpl)'s objectForKey:(n as string)
            if v ≠ missing value then
                unQuoted(show(item 1 of ((ca's NSArray's arrayWithObject:v) as list)))
            else
                missing value
            end if
        end |λ|
    end script
    "(" & intercalateS(", ", map(result, enumFromTo(1, length of tpl))) & ")"
end showTuple
```

```js
// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + enumFromTo(0, tpl.length - 1)
    .map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
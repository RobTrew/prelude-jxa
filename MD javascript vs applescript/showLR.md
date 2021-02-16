```javascript
// showLR :: Either a b -> String
const showLR = lr => {
    const k = undefined !== lr.Left ? (
        'Left'
    ) : 'Right';
    return k + '(' + unQuoted(show(lr[k])) + ')';
};
```


```applescript
-- showLR :: Either a b -> String
on showLR(lr)
    if isRight(lr) then
        "Right(" & unQuoted(show(|Right| of lr)) & ")"
    else
        "Left(" & unQuoted(show(|Left| of lr)) & ")"
    end if
end showLR
```
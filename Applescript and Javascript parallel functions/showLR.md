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

```js
// showLR :: Either a b -> String
const showLR = lr => {
    const k = lr.Left !== undefined ? (
        'Left'
    ) : 'Right';
    return k + '(' + unQuoted(show(lr[k])) + ')';
};
```
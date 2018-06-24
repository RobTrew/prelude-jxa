```applescript
-- showTuple :: Tuple -> String
on showTuple(tpl)
    "(" & unQuoted(show(|1| of tpl)) & ", " & unQuoted(show(|2| of tpl)) & ")"
end showTuple
```

```js
// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + [0, 1].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
```applescript
-- showTuple4 :: Tuple4 -> String
on showTuple4(tpl)
    "(" & unQuoted(show(|1| of tpl)) & ", " & ¬
        unQuoted(show(|2| of tpl)) & ", " & ¬
        unQuoted(show(|3| of tpl)) & ", " & ¬
        unQuoted(show(|4| of tpl)) & ")"
end showTuple4
```

```js
// showTuple4 :: Tuple4 -> String
const showTuple4 = tpl =>
    '(' + [0, 1, 2, 3].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
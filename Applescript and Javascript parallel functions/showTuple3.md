```applescript
-- showTuple3 :: Tuple3 -> String
on showTuple3(tpl)
    "(" & unQuoted(show(|1| of tpl)) & ", " & ¬
        unQuoted(show(|2| of tpl)) & ", " & ¬
        unQuoted(show(|3| of tpl)) & ")"
end showTuple3
```

```js
// showTuple3 :: Tuple3 -> String
const showTuple3 = tpl =>
    '(' + [0, 1, 2].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';
```
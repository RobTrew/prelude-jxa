```javascript
// fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
const fmapTuple = f => tpl =>
    Tuple(tpl[0])(
        f(tpl[1])
    );
```


```applescript
-- fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
on fmapTuple(f, tpl)
    Tuple(|1| of tpl, |λ|(|2| of tpl) of mReturn(f))
end fmapTuple
```
```javascript
// listFromTuple :: (a, a ...) -> [a]
const listFromTuple = tpl =>
    Array.from(tpl);
```


```applescript
-- listFromTuple :: (a, a ...) -> [a]
on listFromTuple(tpl)
    items 2 thru -2 of (tpl as list)
end listFromTuple
```
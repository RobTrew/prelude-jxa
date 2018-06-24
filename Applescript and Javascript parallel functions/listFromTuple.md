```applescript
-- listFromTuple (a, a ...) -> [a]
on listFromTuple(tpl)
    script
        on |λ|(k)
            Just of lookupDict(k, tpl)
        end |λ|
    end script -- All keys except 'type' at end
    map(result, items 1 thru -2 of sort(keys(tpl)))
end listFromTuple
```

```js
// listFromTuple (a, a ...) -> [a]
const listFromTuple = tpl =>
    Object.keys(tpl)
    .sort()
    .reduce(
        (a, k) => k !== 'type' ? (
            a.concat(tpl[k])
        ) : a, []
    );
```
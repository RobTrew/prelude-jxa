```applescript
-- find :: (a -> Bool) -> [a] -> Maybe a
on find(p, xs)
    tell mReturn(p)
        set lng to length of xs
        repeat with i from 1 to lng
            if |λ|(item i of xs) then return Just(item i of xs)
        end repeat
        Nothing()
    end tell
end find
```


```javascript
// find :: (a -> Bool) -> [a] -> Maybe a
const find = p =>
    // Just the first element in xs which 
    // matches the predicate p, or
    // Nothing if no match is found.
    xs => xs.constructor.constructor.name !== (
        'GeneratorFunction'
    ) ? (() => {
        const
            ys = list(xs),
            i = ys.findIndex(p);
        return -1 !== i ? (
            Just(ys[i])
        ) : Nothing();
    })() : findGen(p)(xs);
```
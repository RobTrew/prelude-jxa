```applescript
-- apList (<*>) :: [(a -> b)] -> [a] -> [b]
on apList(fs, xs)
    -- e.g. [(*2),(/2), sqrt] <*> [1,2,3]
    -- -->  ap([dbl, hlf, root], [1, 2, 3])
    -- -->  [2,4,6,0.5,1,1.5,1,1.4142135623730951,1.7320508075688772]
    -- Each member of a list of functions applied to
    -- each of a list of arguments, deriving a list of new values
    set lst to {}
    repeat with f in fs
        tell mReturn(contents of f)
            repeat with x in xs
                set end of lst to |λ|(contents of x)
            end repeat
        end tell
    end repeat
    return lst
end apList
```


```javascript
// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = fs =>
    // The sequential application of each of a list
    // of functions to each of a list of values.
    // apList([x => 2 * x, x => 20 + x])([1, 2, 3])
    //     -> [2, 4, 6, 21, 22, 23]
    xs => fs.flatMap(f => xs.map(f));
```
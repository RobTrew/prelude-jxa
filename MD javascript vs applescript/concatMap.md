```applescript
-- concatMap :: (a -> [b]) -> [a] -> [b]
on concatMap(f, xs)
    set lng to length of xs
    set acc to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set acc to acc & (|λ|(item i of xs, i, xs))
        end repeat
    end tell
    if {text, string} contains class of xs then
        acc as text
    else
        acc
    end if
end concatMap
```


```javascript
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    // Concatenated results of a map of f over xs.
    // f is any function which returns a list value.
    // Any empty lists returned are filtered out by
    // the concatenation.
    xs => xs.flatMap(f);
```
```javascript
// map :: (a -> b) -> [a] -> [b]
const map = f =>
    // The list obtained by applying f
    // to each element of xs.
    // (The image of xs under f).
    xs => [...xs].map(f);
```


```applescript
-- map :: (a -> b) -> [a] -> [b]
on map(f, xs)
    -- The list obtained by applying f
    -- to each element of xs.
    tell mReturn(f)
        set lng to length of xs
        set lst to {}
        repeat with i from 1 to lng
            set end of lst to |λ|(item i of xs, i, xs)
        end repeat
        return lst
    end tell
end map
```
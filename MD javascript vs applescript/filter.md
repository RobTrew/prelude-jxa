```applescript
-- filter :: (a -> Bool) -> [a] -> [a]
on filter(p, xs)
    tell mReturn(p)
        set lst to {}
        set lng to length of xs
        repeat with i from 1 to lng
            set v to item i of xs
            if |λ|(v, i, xs) then set end of lst to v
        end repeat
        if {text, string} contains class of xs then
            lst as text
        else
            lst
        end if
    end tell
end filter
```


```javascript
// filter :: (a -> Bool) -> [a] -> [a]
const filter = p =>
    // The elements of xs which match
    // the predicate p.
    xs => [...xs].filter(p);
```
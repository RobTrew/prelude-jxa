```javascript
// any :: (a -> Bool) -> [a] -> Bool
const any = p =>
    // True if p(x) holds for at least
    // one item in xs.
    xs => [...xs].some(p);
```


```applescript
-- any :: (a -> Bool) -> [a] -> Bool
on any(p, xs)
    -- Applied to a predicate and a list, 
    -- |any| returns true if at least one element of the 
    -- list satisfies the predicate.
    tell mReturn(p)
        set lng to length of xs
        repeat with i from 1 to lng
            if |λ|(item i of xs) then return true
        end repeat
        false
    end tell
end any
```
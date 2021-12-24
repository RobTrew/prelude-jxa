```applescript
-- filter :: (a -> Bool) -> [a] -> [a]on filter(p, xs)    tell mReturn(p)        set ys to {}        set n to length of xs                repeat with i from 1 to n            set v to item i of xs            if |λ|(v, i, xs) then set end of ys to v        end repeat        ys    end tellend filter
```


```javascript
// filter :: (a -> Bool) -> [a] -> [a]
const filter = p =>
    // The elements of xs which match
    // the predicate p.
    xs => [...xs].filter(p);
```
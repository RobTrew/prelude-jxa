```applescript
-- intersect :: (Eq a) => [a] -> [a] -> [a]
on intersect(xs, ys)
    if length of xs < length of ys then
        set {shorter, longer} to {xs, ys}
    else
        set {longer, shorter} to {xs, ys}
    end if
    if shorter ≠ {} then
        set lst to {}
        repeat with x in shorter
            if longer contains x then set end of lst to contents of x
        end repeat
        lst
    else
        {}
    end if
end intersect
```


```javascript
// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = xs =>
    // The intersection of lists xs and ys.
    ys => xs.filter(x => ys.includes(x));
```
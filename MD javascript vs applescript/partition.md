```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => {
        const
            notP = x => !p(x),
            vs = [...xs];

        return Tuple(
            vs.filter(p)
        )(
            vs.filter(notP)
        );
    };
    
// Faster implementation (mutating local state)
    
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition_ = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => {
        const
            matches = [],
            nons = [];

        xs.forEach(x => {
            if (p(x)) {
                matches.push(x)
            } else {
                nons.push(x)
            }
        });

        return Tuple(matches)(nons);
    };
```


```applescript
-- partition :: (a -> Bool) -> [a] -> ([a], [a])
on partition(f, xs)
    tell mReturn(f)
        set ys to {}
        set zs to {}
        repeat with x in xs
            set v to contents of x
            if |λ|(v) then
                set end of ys to v
            else
                set end of zs to v
            end if
        end repeat
    end tell
    Tuple(ys, zs)
end partition
```
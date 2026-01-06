```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => {
        const [matches, nons] = [[], []];

        return (
            xs.forEach(x => {
                if (p(x)) {
                    matches.push(x)
                } else {
                    nons.push(x)
                }
            }),
            Tuple(matches)(nons)
        );
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
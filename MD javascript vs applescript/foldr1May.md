```javascript
// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = f =>
    // Nothing if xs is empty, or Just a right
    // fold of f over the list using the last
    // item of xs as the initial accumulator value.
    xs => Boolean(xs.length) ? (
        Just(
            xs.slice(0, -1).reduceRight(
                uncurry(f),
                xs.slice(-1)[0])
        )
    ) : Nothing();
```


```applescript
-- foldr1May :: (a -> a -> a) -> [a] -> Maybe a
on foldr1May(f, xs)
    set lng to length of xs
    if lng > 0 then
        tell mReturn(f)
            set v to item -1 of xs
            repeat with i from lng - 1 to 1 by -1
                set v to |λ|(item i of xs, v, i, xs)
            end repeat
            return Just(v)
        end tell
    else
        Nothing()
    end if
end foldr1May
```
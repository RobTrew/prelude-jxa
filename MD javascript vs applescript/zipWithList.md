```applescript
-- zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
on zipWithList(f, xs, ys)
    set lng to min(length of xs, length of ys)
    set lst to {}
    if 1 > lng then
        return {}
    else
        tell mReturn(f)
            repeat with i from 1 to lng
                set end of lst to |λ|(item i of xs, item i of ys)
            end repeat
            return lst
        end tell
    end if
end zipWithList
```


```javascript
// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => ((xs_, ys_) => {
        const lng = Math.min(length(xs_), length(ys_));
        return take(lng)(xs_).map(
            (x, i) => f(x)(ys_[i])
        );
    })([...xs], [...ys]);
```
```applescript
-- break :: (a -> Bool) -> [a] -> ([a], [a])
on break(p, xs)
    set bln to false
    tell mReturn(p)
        set lng to length of xs
        repeat with i from 1 to lng
            if |λ|(item i of xs) then
                set bln to true
                exit repeat
            end if
        end repeat
    end tell
    if bln then
        if 1 < i then
            Tuple(items 1 thru (i - 1) of xs, items i thru -1 of xs)
        else
            Tuple({}, xs)
        end if
    else
        Tuple(xs, {})
    end if
end break
```


```javascript
// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    xs => {
        const 
            iLast = xs.length - 1,
            ys = [...xs];
        return splitAt(
            until(i => iLast < i || p(ys[i]))(
                i => 1 + i
            )(0)
        )(ys);
    };
```
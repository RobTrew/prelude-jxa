```javascript
// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp =>
    // A new list in in which x is inserted into the
    // values of the given list at the first position
    // at which a supplied comparison function, applied
    // to x and the following value, returns LT or EQ.
    x => xs => {
        const go = (y, ys) =>
            Boolean(ys.length)
                ? 0 < cmp(y)(ys[0])
                    ? [ys[0], ...go(y, ys.slice(1))]
                    : [y, ...ys]
                : [y];

        return go(x, xs);
    };
```


```applescript
-- insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
on insertBy(cmp, x, ys)
    set lng to length of ys
    if lng > 0 then
        tell mReturn(cmp)
            set bln to false
            repeat with i from 1 to lng
                if |λ|(item i of ys, x) > 0 then
                    set bln to true
                    exit repeat
                end if
            end repeat
        end tell
        if bln then
            if i > 1 then
                items 1 thru (i - 1) of ys & x & items i thru -1 of ys
            else
                {x} & ys
            end if
        else
            ys & x
        end if
    else
        {x}
    end if
end insertBy
```
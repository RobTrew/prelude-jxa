```applescript
-- takeWhileR :: (a -> Bool) -> [a] -> [a]
on takeWhileR(p, xs)
    set bln to false
    set blnText to (class of xs) is text
    tell mReturn(p)
        set lng to length of xs
        repeat with i from lng to 1 by -1
            if not |λ|(item i of xs) then
                set bln to true
                exit repeat
            end if
        end repeat
    end tell
    if bln then
        if i > 1 then
            if blnText then
                text (1 + i) thru (-1) of xs
            else
                items (1 + i) thru (-1) of xs
            end if
        else
            if blnText then
                ""
            else
                {}
            end if
        end if
    else
        xs
    end if
end takeWhileR
```


```javascript
// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => {
        const i = xs.findLastIndex(x => !p(x));

        return -1 !== i
            ? xs.slice(1 + i)
            : [];
    };
```
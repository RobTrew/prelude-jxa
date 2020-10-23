```javascript
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p =>
    // Longest prefix of xs consisting of elements which
    // all satisfy p, tupled with the remainder of xs.
    xs => {
        const
            ys = 'string' !== typeof xs ? (
                list(xs)
            ) : xs,
            iLast = ys.length - 1;
        return splitAt(
            until(
                i => iLast < i || !p(ys[i])
            )(i => 1 + i)(0)
        )(ys);
    };
```


```applescript
-- span :: (a -> Bool) -> [a] -> ([a], [a])
on span(f)
    -- The longest (possibly empty) prefix of xs
    -- that contains only elements satisfying p,
    -- tupled with the remainder of xs.
    -- span(p, xs) eq (takeWhile(p, xs), dropWhile(p, xs)) 
    script
        on |λ|(xs)
            set lng to length of xs
            set i to 0
            tell mReturn(f)
                repeat while lng > i and |λ|(item (1 + i) of xs)
                    set i to 1 + i
                end repeat
            end tell
            splitAt(i, xs)
        end |λ|
    end script
end span
```
```javascript
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p =>
    // Longest prefix of xs consisting of elements which
    // all satisfy p, tupled with the remainder of xs.
    xs => {
        const i = xs.findIndex(x => !p(x));

        return -1 !== i ? (
            Tuple(xs.slice(0, i))(
                xs.slice(i)
            )
        ) : Tuple(xs)([]);
    };
```


```applescript
-- span :: (a -> Bool) -> [a] -> ([a], [a])
on span(p, xs)
    -- The longest (possibly empty) prefix of xs
    -- that contains only elements satisfying p,
    -- tupled with the remainder of xs.
    -- span(p, xs) eq (takeWhile(p, xs), dropWhile(p, xs)) 
    script go
        property mp : mReturn(p)
        on |λ|(vs)
            if {} ≠ vs then
                set x to item 1 of vs
                if |λ|(x) of mp then
                    set {ys, zs} to |λ|(rest of vs)
                    {{x} & ys, zs}
                else
                    {{}, vs}
                end if
            else
                {{}, {}}
            end if
        end |λ|
    end script
    |λ|(xs) of go
end span
```
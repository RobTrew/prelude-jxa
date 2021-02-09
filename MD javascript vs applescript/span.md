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
        property f : mReturn(p)
        on |λ|(cs)
            if {} ≠ cs then
                set c to item 1 of cs
                if |λ|(c) of p then
                    set {ys, zs} to go's |λ|(rest of cs)
                    {{c} & ys, zs}
                else
                    {{}, cs}
                end if
            else
                {}
            end if
        end |λ|
    end script
    |λ|(xs) of go
end span
```
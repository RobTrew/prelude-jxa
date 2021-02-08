```javascript
// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
const stripPrefix = pfx =>
    s => {
        const
            blnString = 'string' === typeof pfx,
            [xs, ys] = blnString ? (
                [pfx.split(''), s.split('')]
            ) : [pfx, s];
        const
            sp_ = (xs, ys) => 0 === xs.length ? (
                Just(blnString ? ys.join('') : ys)
            ) : (0 === ys.length || xs[0] !== ys[0]) ? (
                Nothing()
            ) : sp_(xs.slice(1), ys.slice(1));
        return sp_(xs, ys);
    };
```


```applescript
-- stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
-- stripPrefix :: String -> String -> Maybe String
on stripPrefix(pfx, s)
    set blnString to class of pfx is text
    if blnString then
        set {xs, ys} to {characters of pfx, characters of s}
    else
        set {xs, ys} to {pfx, s}
    end if
    
    script
        on |λ|(xs, ys)
            if length of xs < 1 then
                if blnString then
                    set v to intercalate("", ys)
                else
                    set v to ys
                end if
                Just(v)
            else
                if (length of ys < 1) or (item 1 of xs ≠ item 1 of ys) then
                    Nothing()
                else
                    |λ|(tail(xs), tail(ys))
                end if
            end if
        end |λ|
    end script
    |λ|(xs, ys) of result
end stripPrefix
```
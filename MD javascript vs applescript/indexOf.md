```applescript
-- indexOf :: Eq a => [a] -> [a] -> Maybe Int
-- indexOf :: String -> String -> Maybe Int
on indexOf(pat, src)
    if class of src is text then
        set tpl to breakOn(pat, src)
        if 0 < length of (|2| of tpl) then
            Just((length of |1| of tpl) + 1)
        else
            Nothing()
        end if
    else
        script pfx
            on |λ|(xs)
                isPrefixOf(pat, xs)
            end |λ|
        end script
        findIndex(pfx, tails(src))
    end if
end indexOf
```


```javascript
// indexOf :: Eq a => [a] -> [a] -> Maybe Int
// indexOf :: String -> String -> Maybe Int
const indexOf = needle =>
    haystack => 'string' !== typeof haystack ? (
        findIndex(xs => isPrefixOf(needle)(xs))(
            tails(haystack)
        )
    ) : (() => {
        const i = haystack.indexOf(needle);
        return -1 !== i ? (
            Just(i)
        ) : Nothing();
    })();
```
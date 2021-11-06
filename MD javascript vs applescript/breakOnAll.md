```javascript
// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = needle =>
    // Tuples breaking the string at
    // all non-overlapping instances
    // of the needle in the haystack.
    haystack => Boolean(needle) ? (
        haystack.split(needle)
        .reduce((a, _, i, xs) =>
            0 < i ? (
                a.concat([
                    Tuple(
                        xs.slice(0, i).join(needle)
                    )(
                        needle + xs.slice(i)
                        .join(needle)
                    )
                ])
            ) : a, [])
    ) : null;
```


```applescript
-- breakOnAll :: String -> String -> [(String, String)]
on breakOnAll(pat, src)
    -- breakOnAll "/" "a/b/c/"
    -- ==> [("a", "/b/c/"), ("a/b", "/c/"), ("a/b/c", "/")]
    if "" ≠ pat then
        script
            on |λ|(a, _, i, xs)
                if 1 < i then
                    a & {{intercalate(pat, take(i - 1, xs)), ¬
                        pat & intercalate(pat, drop(i - 1, xs))}}
                else
                    a
                end if
            end |λ|
        end script
        foldl(result, {}, splitOn(pat, src))
    else
        missing value
    end if
end breakOnAll
```
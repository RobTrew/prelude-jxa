```javascript
// breakOnMay :: String -> String -> Maybe (String, String)
const breakOnMay = pat =>
    // Needle -> Haystack -> maybe (prefix before match, match + rest)
    src => Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return Just(0 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)(''));
    })() : Nothing();
```


```applescript
-- needle -> haystack -> maybe (prefix before match, match + rest)
-- breakOnMay :: String -> String -> Maybe (String, String)
on breakOnMay(pat, src)
    if pat ≠ "" then
        set {dlm, my text item delimiters} to {my text item delimiters, pat}
        
        set lstParts to text items of src
        if length of lstParts > 1 then
            set mbTuple to Just(Tuple(item 1 of lstParts, pat & ¬
                ((items 2 thru -1 of lstParts) as text)))
        else
            set mbTuple to Just(Tuple(src, ""))
        end if
        
        set my text item delimiters to dlm
        return mbTuple
    else
        Nothing()
    end if
end breakOnMay
```
```applescript
-- non null needle -> haystack -> (prefix before match, match + rest)
-- breakOn :: String -> String -> (String, String)
on breakOn(pat, src)
    if pat ≠ "" then
        set {dlm, my text item delimiters} to {my text item delimiters, pat}
        
        set lstParts to text items of src
        set lngParts to length of lstParts
        
        if 1 < lngParts then
            set tpl to Tuple(item 1 of lstParts, pat & ¬
                ((items 2 thru -1 of lstParts) as text))
        else
            set tpl to Tuple(src, "")
        end if
        
        set my text item delimiters to dlm
        return tpl
    else
        missing value
    end if
end breakOn
```


```javascript
// breakOn :: String -> String -> (String, String)
const breakOn = pat =>
    // Needle -> Haystack -> (prefix before match, match + rest)
    src => 0 < pat.length ? (() => {
        const xs = src.split(pat);
        return 1 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)('');
    })() : undefined;
```
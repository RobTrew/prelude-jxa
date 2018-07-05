```applescript
-- non null needle -> haystack -> (prefix before match, match + rest)
```

```applescript
-- breakOn :: String -> String -> (String, String)
on breakOn(pat, src)
    if pat ≠ "" then
        set {dlm, my text item delimiters} to {my text item delimiters, pat}
        
        set lstParts to text items of src
        set lngParts to length of lstParts
        
        if lngParts > 1 then
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

```js
// Needle -> Haystack -> (prefix before match, match + rest)
```

```js
// breakOn :: String -> String -> (String, String)
const breakOn = (pat, src) =>
    Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return 1 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src, '');
    })() : undefined;
```
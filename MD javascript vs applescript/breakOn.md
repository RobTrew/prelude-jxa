```applescript
-- breakOn :: String -> String -> (String, String)
on breakOn(pat, src)
    -- non null needle -> haystack -> (prefix before match, match + rest)
    if pat ≠ "" then
        set {dlm, my text item delimiters} to {my text item delimiters, pat}
        
        set lstParts to text items of src
        set lngParts to length of lstParts
        
        if 1 < lngParts then
            set tpl to {item 1 of lstParts, pat & ¬
                ((items 2 thru -1 of lstParts) as text)}
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
// breakOn :: Eq a => [a] -> [a] -> ([a], [a])
// breakOn :: String -> String -> ([Char], [Char])
const breakOn = needle =>
    // A tuple of the prefix before the first match
    // and the whole remainder (including the match).
    haystack => {
        const ns = [...needle];

        const go = hs =>
            isPrefixOf(ns)(hs)
                ? Tuple([])(hs)
                : 0 === hs.length
                    ? Tuple([])([])
                    : first(
                        v => [hs[0]].concat(v)
                    )(
                        go(hs.slice(1))
                    );

        return go([...haystack]);
    };
```
```applescript
-- intercalate :: [a] -> [[a]] -> [a]
-- intercalate :: String -> [String] -> String
on intercalate(sep, xs)
    if class of xs is text then
        set {dlm, my text item delimiters} to ¬
            {my text item delimiters, delim}
        set s to xs as text
        set my text item delimiters to dlm
    else
        concat(intersperse(sep, xs))
    end if
end intercalate
```


```javascript
// intercalate :: [a] -> [[a]] -> [a]
const intercalate = sep =>
    // Flattened interspersal of a list between
    // the elements of a list of lists.
    xs => intersperse(sep)(xs).flat();
```
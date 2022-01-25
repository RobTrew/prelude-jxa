```javascript
// intercalate :: [a] -> [[a]] -> [a]
// intercalate :: String -> [String] -> String
const intercalate = sep => xs =>
    0 < xs.length && "string" === typeof sep &&
    "string" === typeof xs[0] ? (
        xs.join(sep)
    ) : concat(intersperse(sep)(xs));
```


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
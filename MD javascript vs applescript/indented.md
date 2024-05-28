```applescript
-- indented :: String -> String -> String
on indented(strIndent, s)
    script
        on |λ|(x)
            if x ≠ "" then
                strIndent & x
            else
                x
            end if
        end |λ|
    end script
    unlines(map(result, |lines|(s)))
end indented
```


```javascript
// indented :: String -> String -> String
const indented = indent =>
    s => lines(s).map(
        x => 0 < x.length
            ? indent + x
            : x
    )
    .join("\n");
```
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
const indented = strIndent =>
    s => s.split(/[\r\n]/).map(
        x => '' !== x ? strIndent + x : x
    ).join('\n');
```
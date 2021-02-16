```javascript
// bulleted :: String -> String -> String
const bulleted = strTab =>
    s => s.split(/[\n\r]+/u).map(
        x => '' !== x ? (
            `${strTab}- ${x}`
        ) : x
    )
    .join('\n');
```


```applescript
-- bulleted :: String -> String -> String
on bulleted(strIndent, s)
    script go
        on |λ|(x)
            if "" ≠ x then
                strIndent & "- " & x
            else
                x
            end if
        end |λ|
    end script
    unlines(map(go, paragraphs of s))
end bulleted
```
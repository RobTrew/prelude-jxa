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
    unlines(map(go, paragraphs of xs))
end bulleted
```

```js
// bulleted :: String -> String -> String
const bulleted = (strIndent, s) =>
    s.split(/[\r\n]/).map(
        x => '' !== x ? strIndent + '- ' + x : x
    ).join('\n')
```
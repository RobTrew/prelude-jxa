```applescript
-- showSet :: Set -> String
on showSet(s)
    script str
        on |λ|(x)
            x as string
        end |λ|
    end script
    "{" & intercalate(", ", map(str, sort(elems(s)))) & "}"
end showSet
```

```js
// showSet :: Set -> String
const showSet = s =>
    intercalate(sort(elems(s)), ['{','}']);
```
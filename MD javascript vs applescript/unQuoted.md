```javascript
// unQuoted :: String -> String
const unQuoted = s =>
    1 < s.length ? (
        q => s.slice(
            q !== s[0] ? 0 : 1,
            q !== s.slice(-1) ? undefined : -1
        )
    )(
        String.fromCodePoint(34)
    ) : s;
```


```applescript
-- unQuoted :: String -> String
on unQuoted(s)
    script p
        on |λ|(x)
            --{34, 39} contains id of x
            34 = id of x
        end |λ|
    end script
    dropAround(p, s)
end unQuoted
```
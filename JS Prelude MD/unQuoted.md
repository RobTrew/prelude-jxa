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
```javascript
// breakOn :: String -> String -> (String, String)
const breakOn = pat =>
    // Needle -> Haystack -> (prefix before match, match + rest)
    src => 0 < pat.length ? (() => {
        const xs = src.split(pat);
        return 1 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)('');
    })() : undefined;
```
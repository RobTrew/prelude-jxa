```js
// Needle -> Haystack -> (prefix before match, match + rest)
```

```js
// breakOn :: String -> String -> (String, String)
const breakOn = (pat, src) =>
    Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return xs.length > 1 ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src, '');
    })() : undefined;
```
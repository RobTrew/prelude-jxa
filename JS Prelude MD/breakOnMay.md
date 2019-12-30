```js
// Needle -> Haystack -> maybe (prefix before match, match + rest)
```

```js
// breakOnMay :: String -> String -> Maybe (String, String)
const breakOnMay = pat =>
    src => Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return Just(0 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)(''));
    })() : Nothing();
```
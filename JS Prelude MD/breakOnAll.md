```js
// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = pat => src =>
    '' !== pat ? (
        src.split(pat)
        .reduce((a, x, i, xs) =>
            0 < i ? (
                a.concat([
                    Tuple(xs.slice(0, i).join(pat))(
                      pat + xs.slice(i).join(pat)
                    )
                ])
            ) : a, [])
    ) : undefined;
```
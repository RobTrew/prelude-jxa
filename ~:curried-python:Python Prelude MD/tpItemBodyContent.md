```js
// tpItemFullString :: [(String, String)] -> String
const tpItemBodyContent = tokens => {
    // Taskpaper item text without
    // leading syntax or trailling tags.
    const
        xs = dropWhileEnd(
            kv => Boolean(kv[0])
        )(tokens);
    return 0 < xs.length ? unwords(
        (
            '-' !== xs[0][1] ? (
                xs
            ) : xs.slice(1)
        ).map(tpTextFromTuple)
    ) : '';
};
```
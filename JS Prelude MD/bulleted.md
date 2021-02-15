```javascript
// bulleted :: String -> String -> String
const bulleted = strTab =>
    s => s.split(/[\n\r]+/u)
    .map(
        x => '' !== x ? (
            `${strTab}- ${x}`
        ) : x
    )
    .join('\n');
```
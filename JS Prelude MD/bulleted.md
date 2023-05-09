```javascript
// bulleted :: String -> String -> String
const bulleted = strTab =>
    // A copy of s in which each line is
    // preceded by a whitespace indent,
    // followed by a hyphen and space.
    s => s.split(/[\n\r]+/u).map(
        x => "" !== x ? (
            `${strTab}- ${x}`
        ) : x
    )
    .join("\n");
```
```javascript
// outdented :: String -> String
const outdented = s => {
    // All lines in the string outdented by the same amount
    // (just enough to ensure that the least indented lines
    //  have no remaining indent)
    // All relative indents are left unchanged.
    const
        rgx = /^\s*/u,
        xs = lines(s),
        n = Math.min(
            ...xs.map(txt => rgx.exec(txt)[0].length)
        );

    return Boolean(n) ? (
        xs.map(x => x.slice(n)).join("\n")
    ) : s.slice(0);
};
```
```javascript
// outdented :: String -> String
const outdented = s => {
    // All lines in the string outdented by the same amount
    // (just enough to ensure that the least indented lines
    //  have no remaining indent)
    // All relative indents are left unchanged
    const
        // Leading space characters.
        rgx = /^ */u,
        xs = lines(s),
        n = length(minimumBy(comparing(length))(
            xs.map(txt => rgx.exec(txt)[0])
        ));

    return unlines(map(drop(n))(xs));
};
```
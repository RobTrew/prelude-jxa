```js
// regexMatches :: Regex -> String -> [[String]]
const regexMatches = rgx =>
    // All matches of the given (global /g) regex in
    strHay => {
        let m = rgx.exec(strHay),
            xs = [];
        while (m)(xs.push(m), m = rgx.exec(strHay));
        return xs;
    };
```
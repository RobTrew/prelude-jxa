```js
// regexMatches :: String -> String -> [[String]]
const regexMatches = strRgx => strHay => {
    const rgx = new RegExp(strRgx, 'g');
    let m = rgx.exec(strHay),
        xs = [];
    while (m)(xs.push(m), m = rgx.exec(strHay));
    return xs;
};
```
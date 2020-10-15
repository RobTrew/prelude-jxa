```js
// stringCI :: String -> Parser String
const stringCI = s => {
    // Case-insensitive version of the 
    // string parser.
    const go = cs =>
        0 < cs.length ? (
            bindP(
                charCI(cs[0])
            )(c => bindP(
                go(cs.slice(1))
            )(rs => pureP(c.concat(rs))))
        ) : pureP([]);
    return go(s);
};
```
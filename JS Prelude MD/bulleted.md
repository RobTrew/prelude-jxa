```js
// bulleted :: String -> String -> String
const bulleted = strTab => s =>
    s.split(/[\r\n]/).map(
        x => '' !== x ? strTab + '- ' + x : x
    ).join('\n');
```
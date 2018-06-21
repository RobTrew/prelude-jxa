```js
// unQuoted :: String -> String
const unQuoted = s =>
    dropAround(x => 34 === x.codePointAt(0), s);
```
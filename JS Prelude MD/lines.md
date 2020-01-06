```js
// lines :: String -> [String]
const lines = s =>
    // A list of strings derived from a single
    // newline-delimited string. 
    s.split(/[\r\n]/);
```
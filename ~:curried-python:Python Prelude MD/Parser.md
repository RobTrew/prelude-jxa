```js
// Parser :: String -> [(a, String)] -> Parser a
const Parser = f =>
    // A function lifted into a Parser object.
    ({
        type: 'Parser',
        parser: f
    });
```
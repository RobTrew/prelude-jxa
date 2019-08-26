```js
// stripStart :: String -> String
const stripStart = s =>
    dropWhile(isSpace)(
        s
    );
```
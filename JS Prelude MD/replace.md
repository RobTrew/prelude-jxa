```js
// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = (needle, strNew, strHaystack) =>
    strHaystack.replace(
        typeof needle !== 'string' ? (
            needle
        ) : new RegExp(needle, 'g'),
        strNew
    );
```
```js
// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = needle => strNew => strHaystack =>
    strHaystack.replace(
      'string' !== typeof needle ? (
        needle
      ) : new RegExp(needle, 'g'),
      strNew
    );
```
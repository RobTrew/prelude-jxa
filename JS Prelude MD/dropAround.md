```js
// dropAround :: (Char -> Bool) -> String -> String
const dropAround = (p, s) => dropWhile(p, dropWhileEnd(p, s));
```
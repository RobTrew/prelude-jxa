```applescript
-- dropAround :: (Char -> Bool) -> String -> Stringon dropAround(p, s)	dropWhile(p, dropWhileEnd(p, s))end dropAround
```

```js
// dropAround :: (Char -> Bool) -> String -> String
const dropAround = (p, s) => dropWhile(p, dropWhileEnd(p, s));
```
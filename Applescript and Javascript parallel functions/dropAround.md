```applescript
-- dropAround :: (a -> Bool) -> [a] -> [a]
-- dropAround :: (Char -> Bool) -> String -> String
on dropAround(p, xs)
    dropWhile(p, dropWhileEnd(p, xs))
end dropAround
```

```js
// dropAround :: (a -> Bool) -> [a] -> [a]
// dropAround :: (Char -> Bool) -> String -> String
const dropAround = (p, xs) => dropWhile(p, dropWhileEnd(p, xs));
```
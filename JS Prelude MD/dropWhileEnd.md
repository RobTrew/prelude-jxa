```js
// dropWhileEnd :: (Char -> Bool) -> String -> String
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
const dropWhileEnd = (p, s) => {
    let i = s.length;
    while (i-- && p(s[i])) {}
    return s.slice(0, i + 1);
};
```
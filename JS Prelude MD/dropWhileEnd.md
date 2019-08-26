```js
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> String
const dropWhileEnd = p => xs => {
    let i = xs.length;
    while (i-- && p(xs[i])) {}
    return xs.slice(0, i + 1);
};
```
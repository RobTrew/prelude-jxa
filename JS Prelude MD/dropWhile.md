```js
// dropWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (Char -> Bool) -> String -> String
const dropWhile = (p, xs) => {
  let i = 0;
  for (let lng = xs.length;
    (i < lng) && p(xs[i]); i++) {}
  return xs.slice(i);
};
```
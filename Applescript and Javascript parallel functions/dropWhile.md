```applescript
-- dropWhile :: (a -> Bool) -> [a] -> [a]
-- dropWhile :: (Char -> Bool) -> String -> String
on dropWhile(p, xs)
    set lng to length of xs
    set i to 1
    tell mReturn(p)
        repeat while i ≤ lng and |λ|(item i of xs)
            set i to i + 1
        end repeat
    end tell
    drop(i - 1, xs)
end dropWhile
```

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
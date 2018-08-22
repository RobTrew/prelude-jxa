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
    const lng = xs.length;
    return 0 < lng ? xs.slice(
        until(
            i => i === lng || !p(xs[i]),
            i => 1 + i,
            0
        )
    ) : [];
};
```
```applescript
-- takeWhile :: (a -> Bool) -> [a] -> [a]
-- takeWhile :: (Char -> Bool) -> String -> String
on takeWhile(p, xs)
    tell mReturn(p)
        repeat with i from 1 to length of xs
            if not |λ|(item i of xs) then ¬
                return take(i - 1, xs)
        end repeat
    end tell
    return xs
end takeWhile
```

```js
// takeWhile :: (a -> Bool) -> [a] -> [a]
// takeWhile :: (Char -> Bool) -> String -> String
const takeWhile = (p, xs) => {
    let i = 0;
    const lng = xs.length;
    while ((i < lng) && p(xs[i])) (i = i + 1);
    return xs.slice(0, i);
};
```
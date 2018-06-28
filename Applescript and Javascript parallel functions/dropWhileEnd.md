```applescript
-- dropWhileEnd :: (a -> Bool) -> [a] -> [a]
-- dropWhileEnd :: (Char -> Bool) -> String -> String
on dropWhileEnd(p, xs)
    set i to length of xs
    tell mReturn(p)
        repeat while i > 0 and |λ|(item i of xs)
            set i to i - 1
        end repeat
    end tell
    if i > 0 then
        if class of xs ≠ string then
            items 1 thru i of xs
        else
            text 1 thru i of xs
        end if
    else
        {}
    end if
end dropWhileEnd
```

```js
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> String
const dropWhileEnd = (p, xs) => {
    let i = xs.length;
    while (i-- && p(xs[i])) {}
    return xs.slice(0, i + 1);
};
```
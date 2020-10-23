```javascript
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> [Char]
const dropWhileEnd = p =>
    // xs without the longest suffix for which
    // p returns true for all elements.
    xs => {
        let i = xs.length;
        while (i-- && p(xs[i])) {}
        return xs.slice(0, i + 1);
    };
```


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
    take(i, xs)
end dropWhileEnd
```
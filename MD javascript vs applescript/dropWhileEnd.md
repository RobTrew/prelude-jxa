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


```javascript
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
const dropWhileEnd = p =>
    // xs without the largest suffix in which p holds
    // for every element.
    xs => xs.slice(
        0, 1 + xs.findLastIndex(
            x => !p(x)
        )
    );
```
```javascript
// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = p =>
    // The suffix remaining after takeWhile p xs.
    xs => {
        const i = xs.findIndex(x => !p(x));

        return -1 !== i
            ? xs.slice(i)
            : [];
    };
```


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
    if {} ≠ xs then
        items i thru -1 of xs
    else
        xs
    end if
end dropWhile
```
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


```javascript
// dropWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (Char -> Bool) -> String -> String
const dropWhile = p =>
    // The suffix remaining after takeWhile p xs.
    xs => {
        const n = xs.length;

        return xs.slice(
            Boolean(n) ? until(
                i => n === i || !p(xs[i])
            )(i => 1 + i)(0) : 0
        );
    };
```
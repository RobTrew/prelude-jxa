```javascript
// intersperse :: a -> [a] -> [a]
const intersperse = sep =>
    // intersperse(0)([1,2,3]) -> [1, 0, 2, 0, 3]
    xs => 0 < xs.length
        ? [xs[0]].concat(
            xs.slice(1).flatMap(x => [sep, x])
        )
        : [];
```


```applescript
-- intersperse :: a -> [a] -> [a]
-- intersperse :: Char -> String -> String
on intersperse(sep, xs)
    -- intersperse(0, [1,2,3]) -> [1, 0, 2, 0, 3]
    set lng to length of xs
    if lng > 1 then
        set acc to {item 1 of xs}
        repeat with i from 2 to lng
            set acc to acc & {sep, item i of xs}
        end repeat
        if class of xs is string then
            concat(acc)
        else
            acc
        end if
    else
        xs
    end if
end intersperse
```
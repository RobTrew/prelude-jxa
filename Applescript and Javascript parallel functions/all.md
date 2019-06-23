```applescript
-- all :: (a -> Bool) -> [a] -> Bool
on all(p, xs)
    -- True if p holds for every value in xs
    tell mReturn(p)
        set lng to length of xs
        repeat with i from 1 to lng
            if not |λ|(item i of xs, i, xs) then return false
        end repeat
        true
    end tell
end all
```

```js
// True if all elements of the list 
// satisfy the predicate.
```

```js
// all :: (a -> Bool) -> [a] -> Bool
const all = (p, xs) => xs.every(p);
```
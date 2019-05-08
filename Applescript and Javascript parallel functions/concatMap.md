```applescript
-- concatMap :: (a -> [b]) -> [a] -> [b]
on concatMap(f, xs)
    set lng to length of xs
    set acc to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set acc to acc & (|λ|(item i of xs, i, xs))
        end repeat
    end tell
    return acc
end concatMap
```

```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) =>
    xs.reduce((a, x) => a.concat(f(x)), []);
    
// Briefer but slower:
// concatMap :: (a -> [b]) -> [a] -> [b]
// const concatMap = (f, xs) =>
//     [].concat(...xs.map(f))
```
```javascript
// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = xs =>
    // The bind operator for Arrays.
    mf => [...xs].flatMap(mf);
```


```applescript
-- bindList (>>=) :: [a] -> (a -> [b]) -> [b]
on bindList(xs, f)
    set acc to {}
    tell mReturn(f)
        repeat with x in xs
            set acc to acc & |λ|(contents of x)
        end repeat
    end tell
    return acc
end bindList
```
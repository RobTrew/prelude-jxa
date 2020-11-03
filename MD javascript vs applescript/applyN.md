```javascript
// applyN :: Int -> (a -> a) -> a -> a
const applyN = n =>
    // The value of n applications of f to x.
    // (Church numeral n)
    f => x => Array.from({
            length: n
        }, () => f)
        .reduce((a, g) => g(a), x);
```


```applescript
-- applyN :: Int -> (a -> a) -> a -> a
on applyN(n, f, x)
    script go
        on |λ|(a, g)
            |λ|(a) of mReturn(g)
        end |λ|
    end script
    foldl(go, x, replicate(n, f))
end applyN
```
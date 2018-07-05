```applescript
-- composeListLR :: [(a -> a)] -> (a -> a)
on composeListLR(fs)
    script
        on |λ|(x)
            script
                on |λ|(a, f)
                    mReturn(f)'s |λ|(a)
                end |λ|
            end script
            
            foldl(result, x, fs)
        end |λ|
    end script
end composeListLR
```

```js
// composeListLR :: [(a -> a)] -> (a -> a)
const composeListLR = fs =>
    x => fs.reduce((a, f) => f(a), x);
```
```applescript
-- composeListR :: [(a -> a)] -> (a -> a)
on composeListR(fs)
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
// composeListR :: [(a -> a)] -> (a -> a)
const composeListR = fs =>
    x => fs.reduce((a, f) => f(a), x);
```